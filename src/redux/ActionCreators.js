import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../shared/baseURL'

//Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(loadingDishes())

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response
        }else{
            var err = new Error("Error " + response.status + ": " + response.statusText)
            err.response = response
            throw err
        }
    }, err => {
        var err = new Error(err.message)
        throw err;
    })
    .then(response => response.json())
    .then(DISHES => dispatch(addDishes(DISHES)))
    .catch(err => dispatch(failLoadingDishes(err.message)));

}

export const loadingDishes = () => ({
    type: ActionTypes.LOADING_DISHES
})

export const failLoadingDishes = (errMsg) => ({
    type: ActionTypes.FAILLOADING_DISHES,
    payload: errMsg
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

//Comments
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments/')
    .then(response => {
        if(response.ok){
            return response
        }else{
            var err = new Error("Error " + response.status + ": " + response.statusText)
            err.response = response
            throw err
        }
    }, err => {
        var err = new Error(err.message)
        throw err;
    })
    .then(Response => Response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(err => dispatch(failLoadingComments(err.message)));
}

export const failLoadingComments = (errMsg) => ({
    type: ActionTypes.FAILLOADING_COMMENTS,
    payload: errMsg
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment

})

export const postComment = (dishId , rating , author , comment) => (dispatch) => {
    var newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    }
    newComment.date = new Date().toISOString()
    fetch(baseUrl + 'comments/' , {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response
        }else{
            var err = new Error("Error " + response.status + ": " + response.statusText)
            err.response = response
            throw err
        }
    }, err => {
        var err = new Error(err.message)
        throw err;
    })
    .then(Response => Response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(err => {
        alert("Your Comment was not posted.\nError: " + err.message)
        console.log(err.message)
    });
}

//Promos
export const fetchPromos = () => (dispatch) => {
    dispatch(loadingPromos())

    return fetch(baseUrl + 'promotions/')
    .then(response => {
        if(response.ok){
            return response
        }else{
            var err = new Error("Error " + response.status + ": " + response.statusText)
            err.response = response
            throw err
        }
    }, err => {
        var err = new Error(err.message)
        throw err;
    })
    .then(Response => Response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(err => dispatch(failLoadingPromos(err.message)));
}

export const loadingPromos = () => ({
    type: ActionTypes.LOADING_PROMOS
})

export const failLoadingPromos = (errMsg) => ({
    type: ActionTypes.FAILLOADING_PROMOS,
    payload: errMsg
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})

//Leaders
export const fetchLeaders = () => (dispatch) => {
    dispatch(loadingLeaders())

    fetch(baseUrl + "leaders/")
    .then(response => {
        if(response.ok){
            return response
        }else{
            var err = new Error("Error " + response.status + ": " + response.statusText)
            err.response = response
            throw err
        }
    } , error => {
        var err = new Error(error.message)
        throw err
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(err => dispatch(failLoadingLeaders(err.message)))
}

export const loadingLeaders = () => ({
    type: ActionTypes.LOADING_LEADERS
})

export const failLoadingLeaders = (errMsg) => ({
    type: ActionTypes.FAILLOADING_LEADERS,
    payload: errMsg
})

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})

//About Us
export const postFeedback = (feedback) => (dispatch) => {
    fetch(baseUrl + "feedback/" , {
        method: "POST",
        body: JSON.stringify(feedback),
        headers:{
            "content-type": "application/json"
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response
        }else{
            var err = new Error("Error " + response.status + ": " + response.statusText );
            throw err
        }
    } , error =>{
        var err = new Error("Your Feedback was not Submiited\n" + error.message)
        throw err
    })
    .then(response => response.json())
    .then(response => {
        alert(JSON.stringify(response))
    })
    .catch(err => {
        alert("Your Feedback was not submitted\n" + err.message);
    })
}
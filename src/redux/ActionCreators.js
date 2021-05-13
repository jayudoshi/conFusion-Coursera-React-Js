import * as ActionTypes from './ActionTypes'
import DISHES from '../shared/dishes'
export const addComments = (dishId , rating , author , comment) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}) 

export const fetchDishes = () => (dispatch) => {
    dispatch(loadingDishes())

    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    } , 2000)
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
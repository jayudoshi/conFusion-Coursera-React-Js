import * as ActionTypes from './ActionTypes'

const leaderReducer = (state =  {
    isLoading: true,
    errMsg: null,
    leaders: []
}, action) => {
    switch(action.type){
        
        case ActionTypes.LOADING_LEADERS:
            return {...state , isLoading: true , errMsg: null , leaders: []}

        case ActionTypes.FAILLOADING_LEADERS:
            return {...state , isLoading: false , errMsg: action.payload , leaders: []}

        case ActionTypes.ADD_LEADERS:
            return {...state , isLoading: false , errMsg: null , leaders: action.payload}

        default:
            return state;
    }
}

export default leaderReducer;
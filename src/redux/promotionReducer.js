import * as ActionTypes from './ActionTypes'

const promotionReducer = (state = {
    isLoading: true,
    errMsg: null,
    promos: []
} , action) => {
    switch(action.type){
        
        case ActionTypes.LOADING_PROMOS:
            return {...state , isLoading: true , errMsg: null , promos: []}

        case ActionTypes.FAILLOADING_PROMOS:
            return {...state , isLoading: false , errMsg:action.payload , promos: []}

        case ActionTypes.ADD_PROMOS:
            return {...state , isLoading: false , errMsg: null , promos: action.payload}
        default:
            return state;
    }
}

export default promotionReducer;
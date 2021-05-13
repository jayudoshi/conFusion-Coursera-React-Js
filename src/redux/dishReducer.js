import * as ActionTypes from './ActionTypes';

const dishReducer = (state = {
    isLoading : true,
    errMsg: null,
    dishes: []
} , action) => {
    
    switch(action.type){
        case ActionTypes.LOADING_DISHES:
            return {
                ...state,
                isLoading: true,
                errMsg: null,
                dishes: []
            }
        
            case ActionTypes.FAILLOADING_DISHES:
            return {
                ...state,
                isLoading: false,
                errMsg: action.payload,
                dishes: []
            }
        
            case ActionTypes.ADD_DISHES:
            return {
                ...state,
                isLoading: false,
                errMsg: null,
                dishes: action.payload
            }
        
        default: 
            return state;
    }

}

export default dishReducer
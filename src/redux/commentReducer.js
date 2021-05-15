import * as ActionTypes from './ActionTypes'

const commentReducer = (state = {
    errMsg: null,
    comments: []
} , action) => {
    
    switch(action.type){

        case ActionTypes.FAILLOADING_COMMENTS:
            return {...state ,errMsg: action.payload , comments: []}

        case ActionTypes.ADD_COMMENTS:
            return {...state ,errMsg: null , comments: action.payload}

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(action.payload)};
        default:
            return state;
    }
}

export default commentReducer
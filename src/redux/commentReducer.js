import Comments from '../shared/comments';
import * as ActionTypes from './ActionTypes'

const commentReducer = (state = Comments , action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            var comment = action.payload;
            comment.id = Comments.length;
            comment.date = new Date().toISOString();
            return state.concat(comment)
        default:
            return state;
    }
}

export default commentReducer
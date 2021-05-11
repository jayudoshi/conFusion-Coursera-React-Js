import Dishes from '../shared/dishes'
import Comments from '../shared/comments';
import Promotions from '../shared/promotions';
import Leaders from '../shared/leader'

const initialState = {
    dishes : Dishes,
    comments : Comments,
    promotions : Promotions,
    leaders : Leaders
}

const Reducer = (state = initialState,action)=>{
    return state;
}

export {Reducer , initialState};
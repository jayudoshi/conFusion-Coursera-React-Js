import {combineReducers, createStore} from 'redux';
import dishReducer from './dishReducer'
import commentReducer from './commentReducer'
import leaderReducer from './leaderReducer'
import promotionReducer from './promotionReducer'

const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            leaders: leaderReducer,
            promotions: promotionReducer
        })
    )

    return store;
}

export {ConfigureStore};
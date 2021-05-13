import {applyMiddleware, combineReducers, createStore} from 'redux';
import dishReducer from './dishReducer'
import commentReducer from './commentReducer'
import leaderReducer from './leaderReducer'
import promotionReducer from './promotionReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            leaders: leaderReducer,
            promotions: promotionReducer
        }),
        applyMiddleware(thunk,logger)
    )

    return store;
}

export {ConfigureStore};
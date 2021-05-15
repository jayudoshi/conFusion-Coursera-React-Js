import {applyMiddleware, combineReducers, createStore} from 'redux';
import dishReducer from './dishReducer'
import commentReducer from './commentReducer'
import leaderReducer from './leaderReducer'
import promotionReducer from './promotionReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {createForms} from 'react-redux-form'
import { InitialFeedback } from './Form';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            leaders: leaderReducer,
            promotions: promotionReducer,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger),
    )

    return store;
}

export {ConfigureStore};
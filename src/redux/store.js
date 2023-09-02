import {legacy_createStore  as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) 

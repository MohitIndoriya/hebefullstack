import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { reducer } from "../reducer/reducer"
import {cartReducer} from "../reducer/cartReducer"
import { loginReducer } from "../reducer/loginReducer"
import logger from 'redux-logger'

let rootreducer=combineReducers({
    auth:reducer,
    cart:cartReducer,
    user:loginReducer
})

export  const  store=legacy_createStore(rootreducer,applyMiddleware(thunk,logger))
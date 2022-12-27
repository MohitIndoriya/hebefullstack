import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { reducer } from "../reducer/reducer"
import {cartReducer} from "../reducer/cartReducer"

let rootreducer=combineReducers({
    auth:reducer,
    cart:cartReducer
})

export  const  store=legacy_createStore(rootreducer,applyMiddleware(thunk))
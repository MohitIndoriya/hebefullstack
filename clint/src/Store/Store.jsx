import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { reducer } from "../reducer/reducer"
import {cartReducer} from "../reducer/cartReducer"
import { loginReducer } from "../reducer/loginReducer"
import { Adminreducer } from "../reducer/adminReducer"

let rootreducer=combineReducers({
    auth:reducer,
    cart:cartReducer,
    user:loginReducer,
    admin:Adminreducer
})

export  const  store=legacy_createStore(rootreducer,applyMiddleware(thunk))
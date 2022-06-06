import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./isAuth/authreducer";
import { reducer } from "./reducer";

const rootReducer=combineReducers({
    todos:reducer,
    isAuth:authReducer
})
 
export const store=legacy_createStore(
    rootReducer
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    console.log(store.getState())
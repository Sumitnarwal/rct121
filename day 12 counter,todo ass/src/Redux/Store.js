
import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { todoReducer } from "./todos/reducer";



const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})
export const store = createStore(rootReducer);  
console.log("state",store.getState());

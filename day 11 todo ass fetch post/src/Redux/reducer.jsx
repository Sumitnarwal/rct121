import {  ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionType";

const initstate = {
    loading: false,
    todos: [],
    error: false
}

export const reducer = (store = initstate, { type, payload }) => {
    switch (type) {
        // case ADD_TODO: return { ...store, todos: [...store.todos, payload] }

        case GET_TODOS_REQUEST: { return { ...store, loading: true, error: false } }
        case GET_TODOS_SUCCESS: { return { ...store, loading: false, error: false, todos: payload } }
        case GET_TODOS_FAILURE: { return { ...store, loading: true, error: true } }
      
        case ADD_TODOS_REQUEST: {
            return { ...store, loading: true, error: false }
        }
        case ADD_TODOS_SUCCESS: {
            return { ...store, loading: false,}
        }
        case ADD_TODOS_FAILURE: {
            return { ...store, loading: true, error: false }
        }
        default: return store;
    }
}
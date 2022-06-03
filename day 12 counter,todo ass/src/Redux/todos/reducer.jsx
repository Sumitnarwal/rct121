import { ADD_TODO, todosActions } from "./action";

const initstate = {
    loading: false,
    todos: [],
    error: false
}

export const todoReducer = (store = initstate, { type, payload }) => {
    switch (type) {

        // case ADD_TODO: return { ...store, todos: [...store.todos, payload] };
        case todosActions.GET_TODOS_REQUEST: {
            return { ...store, loading: true, error: false }
         }
        case todosActions.GET_TODOS_SUCCESS: {
            return { ...store, loading: false, todos: payload }
        }
        case todosActions.GET_TODOS_FAILURE: {
            return { ...store, loading: true, error: false }
        }
        case todosActions.ADD_TODOS_REQUEST: {
            return { ...store, loading: true, error: false }
         }
        case todosActions.ADD_TODOS_SUCCESS: {
            return { ...store, loading: false}
        }
        case todosActions.ADD_TODOS_FAILURE: {
            return { ...store, loading: true, error: false }
        }
        default:
            return store;
    }


}






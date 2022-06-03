import axios from "axios";

export const todosActions = {

    GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
    GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
    GET_TODOS_FAILURE: "GET_TODOS_FAILURE",
    ADD_TODOS_REQUEST: "ADD_TODOS_REQUEST",
    ADD_TODOS_SUCCESS: "ADD_TODOS_SUCCESS",
    ADD_TODOS_FAILURE: "ADD_TODOS_FAILURE"
}


export const ADD_TODO = "ADD_TODO";
export const getTodoRequest = () => ({

    type: todosActions.GET_TODOS_REQUEST
})
export const getTodoSuccess = (data) => ({
    type: todosActions.GET_TODOS_SUCCESS,
    payload: data
})


export const getTodos = (dispatch) => {
    const todoRequestAction = getTodoRequest();
    dispatch(todoRequestAction)
    return axios({
        url: "https://json-server-mocker-masai.herokuapp.com/tasks",
        method: "GET",
        params: {
            _limit: 5
        }

    }).then((res) => {
        const todoSuccessAction = getTodoSuccess(res.data)
        dispatch(todoSuccessAction)

    }).catch((err) => {
        const todoErrorAction = getTodoFailure()
        dispatch(todoErrorAction)
    })
};
////////////////////////////////
export const getTodoFailure = () => ({
    type: todosActions.GET_TODOS_FAILURE
})

export const addTodoRequest = () => ({

    type: todosActions.ADD_TODOS_REQUEST
})
export const addTodoSuccess = (data) => ({
    type: todosActions.ADD_TODOS_SUCCESS,
    payload: data
})

export const addTodoFailure = () => ({
    type: todosActions.ADD_TODOS_FAILURE
})

export const addTodos = ({ title, dispatch }) => {
    const todoRequestAction = addTodoRequest();
    dispatch(todoRequestAction)
    return axios({
        url: "https://json-server-mocker-masai.herokuapp.com/tasks",
        method: "POST",
        data: {
            title,
            status: false
        }

    }).then((res) => {
        const todoSuccessAction = addTodoSuccess()
        dispatch(todoSuccessAction)

    }).catch((err) => {
        const todoErrorAction = addTodoFailure()
        dispatch(todoErrorAction)
    })
};

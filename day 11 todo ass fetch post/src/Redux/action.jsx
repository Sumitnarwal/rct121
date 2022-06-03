import axios from "axios";
import {  ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionType";

export const todosActions = {

  
    ADD_TODOS_REQUEST: "ADD_TODOS_REQUEST",
    ADD_TODOS_SUCCESS: "ADD_TODOS_SUCCESS",
    ADD_TODOS_FAILURE: "ADD_TODOS_FAILURE"
}


export const getTodoRequest = () => ({
    type: GET_TODOS_REQUEST
})
export const getTodosucess = (data) => ({
    type: GET_TODOS_SUCCESS,
    payload: data
})
export const getTodoFailure = () => ({
    type: GET_TODOS_FAILURE
})

export const getTodo = (dispatch) => {
    const todoRequestAction = getTodoRequest()
    dispatch(todoRequestAction)
    return axios({
        url: "https://json-server-mocker-masai.herokuapp.com/tasks",
        method: "GET",
        params:{
            _limit:5
        }
       
    }).then((res) => {
        const todoSuccessAction = getTodosucess(res.data)

        dispatch(todoSuccessAction)
    }).catch((err) => {
        const todoErrorAction = getTodoFailure();
        dispatch(todoErrorAction)
    })
};



////////////////////////////

export const addTodoRequest = () => ({

    type: ADD_TODOS_REQUEST
})
export const addTodoSuccess = (data) => ({
    type: ADD_TODOS_SUCCESS,
    payload: data
})

export const addTodoFailure = () => ({
    type: ADD_TODOS_FAILURE
})
//////////when add todo the this router
export const addTodos = ({ title, dispatch }) => {
    console.log("title",title)
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
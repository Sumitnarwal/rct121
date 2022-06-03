import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getTodos } from "../Redux/todos/action";
import { TodosInput } from "./TodoInput"
import { TodoList } from "./TodoList"


export const Todo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getTodos(dispatch)
    }, [])

    return (
        <div>
            <TodosInput />
            <br />
            <TodoList />
        </div>
    )
}
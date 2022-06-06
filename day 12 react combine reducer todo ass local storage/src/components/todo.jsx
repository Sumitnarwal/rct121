

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodo } from "../Redux/action"
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos.todos)
    useEffect(() => {
        getTodo(dispatch)
    }, [])
  //  console.log(todos)
    return (
        <div>
            <TodoInput />
            <br />
            <br />
            <TodoList />
        </div>
    )
}






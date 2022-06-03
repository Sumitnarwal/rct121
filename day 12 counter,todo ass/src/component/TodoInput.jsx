import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { store } from "../Redux/Store"
import { addTodos, getTodos } from "../Redux/todos/action"

export const TodosInput = () => {
    const state = useSelector((store) => store.todos.todos)
    const dispatch = useDispatch();
    const [text, setText] = useState("")

    const handleAddTodos = () => {
        dispatch(
            addTodos({
                title: text,
                dispatch
            }).then(() => {
                getTodos(dispatch);
            })
        )
    }

    return (
        <div>
            <input type="text" placeholder="ADD items" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddTodos}>ADD</button>
            {//state?.map((t) => (
                //   <div key={t.title}>{t.title}</div>
                //  ))
            }
        </div>
    )
}

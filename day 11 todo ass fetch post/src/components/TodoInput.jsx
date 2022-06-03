import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos, getTodo } from "../Redux/action"


export const TodoInput = () => {
    const dispatch = useDispatch()
    //const todos = useSelector((store) => store.todos)
    const [text, setText] = useState("");
  //console.log("text",text)
    const handleAdd = () => {
        dispatch(addTodos({
            title:text,
            dispatch
        }).then(()=>{

            getTodo(dispatch)
        })
        )
    }
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="add todo" />
            <button onClick={handleAdd}>ADD TODO</button>

        </div>
    )
}





import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getTodo } from "../Redux/action"




export const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const out = useSelector((item) => item.isAuth.logout)
    const loading = useSelector((state) => state.todos.loading)
    const dispatch = useDispatch()
    //   console.log(todos)const dispatch=useDispatch()
    //console.log("todo", todo)
    const handleDelete = (id) => {
        axios
            ({
                url: `https://json-server-mocker-masai.herokuapp.com/tasks/${id}`,
                method: "DELETE",
            }).then((res) => {
                getTodo(dispatch)
            }).catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div>
            {out ?
                <div>
                    <h3>Todos</h3>
                    {loading && <div>Loading</div>}

                    {
                        todos?.map((item) => (
                            <div key={item.id}>{item.id}-{item.title}-{
                                `${item.status}`}
                                <button onClick={() => handleDelete(item.id)}>delete</button>
                            </div>
                        ))
                    }
                </div> : null
            }
        </div>

    )

}
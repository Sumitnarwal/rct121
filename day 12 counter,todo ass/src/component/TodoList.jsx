import { useSelector } from "react-redux"


export const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const loading=useSelector((state)=> state.todos.loading)
    console.log(todos)
    return (
        <div>
            <h3>Todos</h3>
           {loading && <div>Loading</div>}
            {
                todos.map((item) => (
                    <div key={item.id}>{item.id}-{item.title}-{
                         `${item.status}`}</div>
                ))
            }
        </div>

    )
}





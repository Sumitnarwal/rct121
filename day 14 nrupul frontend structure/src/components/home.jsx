import { useNavigate } from "react-router-dom"



export const Home = () => {
    const navigate=useNavigate()
    return (
        <div>
            <button onClick={()=>navigate("/prod")}>ALL Products</button>
        </div>
    )
}
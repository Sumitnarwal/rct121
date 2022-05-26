import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export const Navbar=()=>{
const {status,isAuth} =useContext(AuthContext)

    return(
        <div>
        <button onClick={isAuth}>
        {status? "Login":"Logout"}
        </button>
        </div>
    )
}
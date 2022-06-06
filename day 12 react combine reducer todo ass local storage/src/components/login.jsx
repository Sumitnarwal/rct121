import { useDispatch, useSelector } from "react-redux"

import { LoginTo, Logout } from "../Redux/isAuth/action"

export const Login=()=>{
    const inn=useSelector((item)=>item.isAuth.login)
    const out=useSelector((item)=>item.isAuth.logout)
    const dispatch=useDispatch()
    const handleLogin=()=>[
        dispatch(LoginTo(!inn))
    ]
    const handleLogout=()=>[
        dispatch(Logout(!out))
    ]
    return(
        <div>
        {   out?
            <button onClick={handleLogin}>login</button>:<button onClick={handleLogout}>logout</button>

        }
        </div>
    )
}
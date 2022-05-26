import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
export const Body = () => {
    const { isAuth, status } = useContext(AuthContext)
    const [userData, setUserData] = useState([])
    useEffect(() => {
        getData()
    }, [status])

    const getData = () => {
        axios({
            url: "https://reqres.in/api/users",
            method: "GET",

        }).then((res) => {
            setUserData(res.data.data)
        })
    }
   // console.log(userData)
    return (
        <div>
            <div>{status ? " User is Login" : " User is Logout"}</div>
            {status ?
                <div>
                    {userData.map((item) => (
                        <div>{item.first_name}</div>
                    ))}
                </div>: null
            }
                </div>
    )
}
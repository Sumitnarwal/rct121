import axios from "axios"
import { useEffect, useState } from "react"

import "../css/store.css"

export const Store = () => {
    const [store, setStore] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios({
            url: "https://cartiphone.herokuapp.com/store",
            method: "GET"
        }).then((res) => {
            setStore(res.data)
        })
    }
    console.log(store)
    return (
        <div>
        <h2>Store</h2>
        <div id="storee">
        {store?.map((item)=>(
            <div  key={item.id}>
            <img src={item.img}/>
            <p>{item.name}</p>
            </div>
            
            ))}
            </div>
        </div>
    )
}
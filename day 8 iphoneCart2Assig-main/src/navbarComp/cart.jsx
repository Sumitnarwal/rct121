


import axios from "axios"
import { useEffect, useState } from "react"
import "../css/store.css"
import { Mac } from "./Mac"

export const Cart = () => {

    const [cart, setCart] = useState([])
    const [length, setLength] = useState("")
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios({
            url: "http://localhost:8080/cart",
            method: "GET"
        }).then((res) => {
            setCart(res.data)
            setLength(res.data.length)
        })
    }

    const handleSplice = (id) => {
        console.log(id)
        axios({
            url: `http://localhost:8080/cart/${id}`,
            method: "DELETE",

        }).then((res) => {
            console.log(res)
            setCart(alert("item delete"))
            getData()
        })
    }
    //  console.log(mac)
    return (
        <div>
            <div id="cart">
                <h2>Cart:{length}</h2>
                {cart?.map((item) => (
                    <div id="kk2" key={item.id}>
                        <div><img src={item.img} /> </div>
                        <div>
                            <p>{item.name}</p>
                            <p>$ {item.price}</p>
                            <button onClick={() => handleSplice(item.id)}>Remove</button>
                        </div>


                    </div>

                ))}
            </div>
        </div>
    )
}

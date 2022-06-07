


import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/cartContetext"
import "../css/store.css"
import { Mac } from "./Mac"

export const Cart = () => {

    const [cart, setCart] = useState([])
    const [length, setLength] = useState(0)
    const { setCartlength } = useContext(CartContext)
    useEffect(() => {
        getData()
        setCartlength(length)

    }, [length, cart])
    const getData = () => {
        axios({
            url: "https://cartiphone.herokuapp.com/cart",
            method: "GET"
        }).then((res) => {
            setCart(res.data)
            setLength(res.data.length)
        })
    }

    const handleSplice = (id) => {
        console.log(id)
        axios({
            url: `https://cartiphone.herokuapp.com/cart/${id}`,
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

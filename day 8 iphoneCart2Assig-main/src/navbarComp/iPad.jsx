
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { CartContext } from "../context/cartContetext"
import "../css/store.css"
import { Cart } from "./cart"

export const Ipads = () => {
const cartData=Cart()
    const navigate = useNavigate()
    const { handleCart } = useContext(CartContext)
    const [mac, setMac] = useState([])
    useEffect(() => {
        getData()
       
    }, [])
    const getData = () => {
        axios({
            url: "https://cartiphone.herokuapp.com/ipad",
            method: "GET"
        }).then((res) => {
            setMac(res.data)
        })
    }
    const handleAdd = (id, src, name, price) => {
        // console.log(name)
       // handleCart()
        axios({
            url: "https://cartiphone.herokuapp.com/cart",
            "method": "POST",
            data: {
                id: id,
                img: src,
                name: name,
                price: price,

            }
        })
    }
    const goTodetail = (id) => {
        navigate(`/prod/${id}`)
    }
    console.log(mac)
    return (
        <div>
            <h2>Shop iPad</h2>
            <div id="storee">
                {mac?.map((item) => (
                    <div onClick={() => goTodetail(item.id)} id="imgk" key={item.id}>
                        <img src={item.img} />
                        <p>{item.name}</p>
                        <p>$ {item.price}</p>
                        <button onClick={() => handleAdd(item.id, item.img, item.name, item.price, handleCart)}>ADD TO CART</button>
                        <p>Learn more {">"}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

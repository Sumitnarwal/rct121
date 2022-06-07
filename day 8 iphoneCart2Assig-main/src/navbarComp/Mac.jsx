
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContetext"
import "../css/store.css"

export const Mac = () => {
    const [mac, setMac] = useState([])
    const { handleCart } = useContext(CartContext)
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios({
            url: "https://cartiphone.herokuapp.com/mac",
            method: "GET"
        }).then((res) => {
            setMac(res.data)
        })
    }
    const handleAdd = (id, src, name, price) => {
        // console.log(name)
     //   handleCart()
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
    //  console.log(mac)
    return (
        <div>
            <h2>Which Mac is right for you ?</h2>
            <div id="storee">
                {mac?.map((item) => (
                    <div id="imgk" key={item.id}>
                        <Link to={`/prod/${item.id}`}> <img src={item.img} /> </Link>
                        <p>{item.name}</p>
                        <p>$ {item.price}</p>
                        <button onClick={() => handleAdd(item.id, item.img, item.name, item.price)} >ADD TO CART</button>
                        <p>Learn more {">"}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}
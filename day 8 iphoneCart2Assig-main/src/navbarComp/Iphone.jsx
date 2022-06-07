

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { ProdDetail } from "../components/productDetailPage"
import { CartContext } from "../context/cartContetext"
import "../css/store.css"

export const Iphone = () => {
    const [mac, setMac] = useState([])
 //   const { handleCart } = useContext(CartContext)
 const navigate=useNavigate()
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios({
            url: "https://cartiphone.herokuapp.com/iphone",
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
    const handleDetail = (id) => {
      //  console.log("iphone")
      // navigate(<ProdDetail/>)
         <Navigate to={`prod/:${id}`}/>
    }
    //  console.log(mac)
    return (
        <div>
            <h2>Shop iPhone</h2>
            <div id="storee">
                {mac?.map((item) => (
                    <div id="imgk" key={item.id}>
                    <Link to={`/prod/${item.id}`}> <img src={item.img} /> </Link>
                        <p>{item.name}</p>
                        <p>$ {item.price}</p>
                        <button onClick={() => handleAdd(item.id, item.img, item.name, item.price)}>ADD TO CART</button>
                        <p>Learn more {">"}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

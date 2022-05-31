

import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { ProdDetail } from "../components/productDetailPage"
import "../css/store.css"

export const Iphone = () => {
    const [mac, setMac] = useState([])
 const navigate=useNavigate()
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios({
            url: "http://localhost:8080/iphone",
            method: "GET"
        }).then((res) => {
            setMac(res.data)
        })
    }
    const handleAdd = (id, src, name, price) => {
        // console.log(name)
        axios({
            url: "http://localhost:8080/cart",
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

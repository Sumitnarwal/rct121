
    import axios from "axios"
    import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
    import "../css/store.css"

export const Ipads=()=>{
  


    const [mac, setMac] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios({
            url: "http://localhost:8080/ipad",
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
    console.log(mac)
    return (
        <div>
        <h2>Shop iPad</h2>
        <div id="storee">
        {mac?.map((item)=>(
            <div id="imgk" key={item.id}>
            <Link to={`/prod/${item.id}`}> <img src={item.img} /> </Link>
            <p>{item.name}</p>
            <p>$ {item.price}</p>
            <button onClick={() => handleAdd(item.id,item.img,item.name,item.price)}>ADD TO CART</button>
            <p>Learn more {">"}</p>
            </div>
            
            ))}
            </div>
        </div>
    )
}

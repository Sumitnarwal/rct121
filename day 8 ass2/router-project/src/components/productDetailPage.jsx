import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export const ProdDetail = () => {
    const [pro, setPro] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        axios({
            url: `http://localhost:8080/allpro/${id}`,
            method: "GET"
        }).then((res) => {
            setPro(res.data)
            console.log(res.data)
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
        }).then((res)=>{
            alert("product add to cart")
        })
    }
    return (
        <div>
            <h2>
                Detail of products
            </h2>
            <img src={pro.img} />
            <p>Name: {pro.name}</p>
            <p>Price: {pro.price}</p>
            <button  onClick={() => handleAdd(pro.id,pro.img,pro.name,pro.price)}>ADD TO CART</button>
        </div>
    )
}
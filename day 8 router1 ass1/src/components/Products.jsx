import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



export const Products=()=>{
    const [loading,setLoading]=useState(true)
    const [prod,setProd]=useState([])
    useEffect(()=>{
     getData()
    },[])
    const getData=()=>{
        axios({
          url:"http://localhost:8080/data",
          method:"GET"
        }).then((res)=>{
    setProd(res.data)
    setLoading(false)
        })
    }
    console.log(prod)
    return(
        <div>
        {loading && <div>...Loading</div>}
       <h1>Products</h1> 
       {prod?.map((item)=>(
           <div key={item.id}>
           <div >{item.name}</div>
         <Link to={`/products/${item.id}`}>  <div>more Details</div></Link>
           </div>
           ))}
        </div>
    )
}
import { Link } from "react-router-dom"

import "../App.css"

export  const Navbar=()=>{
  
    return(
        <div id="sk" style={{padding:"10px"}}>
        <Link id="pk" to="/">Home</Link>
        <Link  id="pk" to="/products">products</Link>
       
        </div>
    )
}



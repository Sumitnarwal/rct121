import { Link } from "react-router-dom"






export const Navbar=()=>{
    return(

        <div>
        <Link to="/store">Store</Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/watch">iPhone</Link>
        <Link to="/iphone">Watch</Link>
        <Link to="/cart">cart</Link>
        </div>
    )
}
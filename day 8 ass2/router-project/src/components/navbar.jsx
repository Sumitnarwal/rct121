import { Link } from "react-router-dom"


import "../css/navbar.css"
import { SearchItems } from "./seachitem"



export const Navbar = () => {
    return (
        <div id="top">
            <div id="navbar">
                <Link id="pk" to="/store">Store</Link>
                <Link id="pk" to="/mac">Mac</Link>
                <Link id="pk" to="/ipad">iPad</Link>
                <Link id="pk" to="/iphone">iPhone</Link>
                <Link id="pk" to="/iphone">Watch</Link>
                <Link id="pk" to="/cart">cart</Link>
            </div>
           <SearchItems/>
        </div>
    )
}
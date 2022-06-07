import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContetext"


import "../css/navbar.css"


export const Navbar = () => {
    const {cartlength}=useContext(CartContext)
    return (
        <div id="top">
            <div id="navbar">
                <Link id="pk" to="/">Store</Link>
                <Link id="pk" to="/mac">Mac</Link>
                <Link id="pk" to="/ipad">iPad</Link>
                <Link id="pk" to="/iphone">iPhone</Link>
                <Link id="pk" to="/iphone">Watch</Link>
                <Link id="pk" to="/cart">cart{" "}({cartlength})</Link>
            </div>
        </div>
    )
}
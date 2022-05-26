import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { ThemeContext } from "../Context/themeContext"
import style from "./button.css"


export const Button = ({ text, onClick }) => {

    const { count, handleCartUpdate } = useContext(CartContext)
    const  [theme,toogleTheme]  = useContext(ThemeContext)
    return (
        <div>
            {
                //   <div id="four" style={{backgroundColor:`state`}}>{count}</div>
                //   <button onClick={()=>handleCartUpdate(1)} >inc</button>
                //   <button onClick={()=>handleCartUpdate(-1)} >dec</button>
            }
            <div>
                {""}
                <button  className={`${style.buttonBase} ${theme === "light" ? style.buttonLight : style.buttonDark}`}>{text} </button>
            </div>
        </div>

    )
}





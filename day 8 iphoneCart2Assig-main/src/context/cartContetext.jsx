import { Children, createContext, useState } from "react";


export const CartContext = createContext()
export const CartContextProvider = ({children}) => {
const [cartlength,setCartlength]=useState(0)
console.log("cart",cartlength)
const handleCart=(data)=>{
    setCartlength(data)
}

    return (
        <CartContext.Provider value={{cartlength,setCartlength,handleCart}}>{children}</CartContext.Provider>
    )
}
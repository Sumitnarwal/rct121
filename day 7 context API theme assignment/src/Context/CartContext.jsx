
import { createContext, useState } from "react";
export const CartContext=createContext();

export const CartContextProvider=({children})=>{
   // const [theme,setState]=useState("red")
const [count,setCount]=useState(5)

    const  handleCartUpdate=(value)=>{
     { // theme==="red"?setState("dark"):setState("red")
    }
    setCount(count+value)
  }
  console.log(children)
    return <CartContext.Provider value={{count,handleCartUpdate}}>

  {children}
    </CartContext.Provider>
}

 

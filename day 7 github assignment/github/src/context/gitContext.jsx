import { createContext, useContext, useState } from "react";



export const GitContext=createContext();

export const GitContextProvider=({children})=>{
    const[search,setSearch]=useState("masai")
    const handleChange=(value)=>{
        setSearch(value)
        console.log("vvv",value)
      
    }
    return(
        <div>
        <GitContext.Provider value={{search,handleChange }}>{children}</GitContext.Provider>
        </div>
    )
}

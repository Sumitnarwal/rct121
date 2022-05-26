import { useContext, useState } from "react"
import { GitContext } from "../context/gitContext"


export const Search=()=>{
const {search,handleChange}=useContext(GitContext);
const [text,setText]=useState("")
    return(
        <div>
        <input value={text} placeholder="search" onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>handleChange(text) }>Search</button>
        </div>
    )
}
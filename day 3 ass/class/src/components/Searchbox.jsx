import { useState } from "react"


export const SerachBox=({handleChange})=>{
const [text,setText]=useState("")
    return(
       <div>
   <input placeholder="search Repo" value={text} type="text" onChange={(e)=>setText(e.target.value) }/>
   <button onClick={()=>handleChange(text)}>Search</button>
       </div> 
       
    )
}
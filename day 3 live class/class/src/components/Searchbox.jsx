import { useState } from "react"


export const SerachBox=({handleClick})=>{
const [text,setText]=useState("")

    return(
       <div>
       <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
       <button onClick={()=>handleClick(text)}>Search</button>
       </div> 
       
    )
}
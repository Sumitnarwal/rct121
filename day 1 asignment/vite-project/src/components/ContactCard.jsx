
import { useState } from "react"
import "../App.css"

export const ContactCard = ({ name, phone, email, id, img }) => {

  const [state,setState]=useState(false)
  const mobileHide=()=>{
    setState(!state)
  }
  return (
    <div id="divid">
      <div id="imgdiv">
      <img src={img} />
      </div>
      <div   id="detail">
        
   {name} <br/>
    {email}<br/>
    <div>
    {state?{phone}:null}
    <button onClick={()=>mobileHide}>Contact Detail</button>
    </div>
           
        
     
      </div>
    </div>
  )


}
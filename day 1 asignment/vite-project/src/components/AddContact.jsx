import { useState } from "react"




export const AddContact = (props) => {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [img,setUrl]=useState("")
const [phone,setMobile]=useState("")
const handleChange=()=>{
    if(props.handleChange) props.handleChange(name,email,img)
}
return(
<div>
<h1>Contact List</h1>
<input placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>     <br/>
<input placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
<input placeholder="Enter mobile" value={email} onChange={(e)=>setMobile(e.target.value)}/><br/>
<input placeholder="img Url" value={img} onChange={(e)=>setUrl(e.target.value)}/><br/>
<button onClick={handleChange}>ADD</button>

</div>


)



}
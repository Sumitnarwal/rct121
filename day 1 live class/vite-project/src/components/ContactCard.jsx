import React from 'react'


export const ContactCard=({name,last,phone,onDelete,id})=>{
return(
  <div
  style={{
    display:"Flex",
    padding:"10px",
    border:"1px solid black",
    marginBottom:"5px",
    gap:"1 rem"
  }}
    >
    {name} {"  "}{last} {"  "}{ phone} {"   "}
    <button onClick={()=>onDelete(id)}>DELETE</button>
  </div>
)
}

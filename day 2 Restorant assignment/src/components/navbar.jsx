

import "./navbar.css"

export const Navbar=({handleFilter})=>{
  
 
    return(
        <div id="nav">
      
    {
  //     <button>Cash Payment</button>
  //   <button>Card Payment</button>
  // <button>Upi Payment</button>
}
      <button onClick={()=>{handleFilter(1)}}>Restaurant with min 1 star</button>
      <button onClick={()=>{handleFilter(2)}}>Restaurant with min 2 star</button>
      <button onClick={()=>{handleFilter(3)}}>Restaurant with min 3 star</button>
      <button onClick={()=>{handleFilter(4)}}>Restaurant with min 4 star</button>
      
      
      
        </div>
    )
}
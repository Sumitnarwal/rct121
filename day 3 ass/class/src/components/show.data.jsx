

export const ShowData=({full_name,watchers_count,name})=>{
    return(
        
        <div  >
       
        <div style={{border:"1px solid black"}}>
       
        <p>Name-{name}</p>
        <p>Full-Name-{full_name}</p>
        <p>watchers-count={watchers_count}</p>
      
        </div>
        
        </div>
        )
}
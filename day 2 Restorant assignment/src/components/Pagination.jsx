

 export const Pagination=({currentPage, lastPage, onPageChange={page} })=>{
 const arr=new Array(lastPage).fill(0);
    return(
     <div>
     {
       arr.map((item,page)=> <button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage} >{page+1}</button>  )
     }
     </div>
 )
 }
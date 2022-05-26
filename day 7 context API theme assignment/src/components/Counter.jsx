import { useReducer } from "react";

const initState={
    count:0
}

const counterAction={
    incr:"incr",
    decr:"decr",
    reset:"reset"
};

const reducer=(state,action)=> {
    switch (action.type){
        case counterAction.incr:{
            return{
                ...state,
                counter:state.count+1,
            }
        }
        case counterAction.decr:{
            return {
                ...state,
                counter:state.count-1,
            }
        }
    }
    return   state
}
export const Counter=()=>{
const [state,dispatch]=useReducer(reducer,initState)
    return(
<div>
<h2>Count:{state.count}</h2>
<div>
<button onClick={()=>dispatch({
      type:counterAction.incr

}) }>ADD</button>
<button 
onClick={()=>dispatch({
    type:counterAction.incr
    
}) }
>DEC</button>
</div>
</div>
    )
}
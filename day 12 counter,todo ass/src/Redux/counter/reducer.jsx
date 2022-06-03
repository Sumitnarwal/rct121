import { ADD_COUNT, RED_COUNT } from "./action";


const initstate={
    counter:Number(localStorage.getItem("counter"))||0
}


export const counterReducer=(store=initstate,{type,payload})=>{
switch(type){
    case ADD_COUNT: {
        const value=store.counter+ payload    
        localStorage.setItem("counter",value);
        return{...store,counter:store.counter+payload};
    }
    case RED_COUNT: {
        const value=store.counter + payload    
        localStorage.setItem("counter",value);
        return{...store,counter:store.counter-payload};
    }
    
     
    default: return store;
}

}










import { store } from "../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { addCount, redCount } from "../Redux/counter/action";

export const Counter = () => {
 
  const dispatch = useDispatch();

  const counter = useSelector((store) => store.counter.counter);  

  
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1))      
        }} >ADD</button>
      <button
        onClick={() => {
          dispatch(redCount(1))      
        }} >REDUCE</button>

    </div>
  ) 
}







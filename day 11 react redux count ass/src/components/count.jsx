import { useDispatch, useSelector } from "react-redux"
import { addCount, decCount } from "../Redux/action";


export const Count = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => dispatch(addCount(1))}>add</button>
            <button onClick={() => dispatch(decCount(-1))}>dec</button>
        </div>
    )
}
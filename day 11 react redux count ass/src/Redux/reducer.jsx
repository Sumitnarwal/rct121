
import { ADD_COUNT, DEC_COUNT } from "./actionType"
const initState = {
    count: 0
}
/// reducer=(state,action)
export const reducer = (state = initState, { type, payload }) => {
    //console.log(payload)
    switch (type) {
        case ADD_COUNT: {
            return {
                ...state, count: state.count + payload
            };
        }
        case DEC_COUNT: {
            return {
                ...state, count: state.count - payload
            };
        }
        default: return state;
    }

}


import { LOGIN_ACTION, LOGOUT_ACTION } from "./action"

const initstate = {
    login: false,
    logout: true
}

export const authReducer = (store = initstate, { type, payload }) => {
    switch (type) {
        case LOGIN_ACTION: return { login: true, logout: false }
        case LOGOUT_ACTION: return { login: false, logout: true }
        default: return store
    }
}
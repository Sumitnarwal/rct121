

export const LOGIN_ACTION = "LOGIN_ACTION"
export const LOGOUT_ACTION = "LOGOUT_ACTION"

export const LoginTo =(data)=> {
    return{
        type: LOGIN_ACTION,
        payload:data
    }
}
export const Logout =(data)=> {
    return{
        type: LOGOUT_ACTION,
        payload:data
    }
}
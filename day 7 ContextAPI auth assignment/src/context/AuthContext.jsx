import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [status, setStatus] = useState(false)
    const isAuth = () => {
        console.log("sss")
        setStatus(!status)
    }
    return <div>
        <AuthContext.Provider value={{ status, isAuth }}>{children}</AuthContext.Provider>
    </div>
}
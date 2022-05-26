import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeContextProvder = ({ children }) => {
    const [state, setState] = useState("light")

    const toggleTheme =()=>{
        state==="light"? setState("dark"): setState("light")
    }

    return <ThemeContext.Provider value={[ state, toggleTheme ]}>
        {children}
    </ThemeContext.Provider>
}

      
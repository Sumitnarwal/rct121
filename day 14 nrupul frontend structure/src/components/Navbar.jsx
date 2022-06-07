import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Restorant } from "./products"

export const Navbar = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prod" element={<Restorant/>} />
            </Routes>
        </div>
    )
}






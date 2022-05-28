import { useEffect, useRef, useState } from "react"
import "../css/navbar.css"




export const Banner = () => {
    let timeRef = useRef(null)
    const [no, setNo] = useState(1)

    useEffect(() => {
        clearInterval(timeRef.current)
        return(
            moveData()
     )
     
    }, [no])
    const moveData = () => {
        timeRef.current = setInterval(() => {
       //     console.log("no",no)
            setNo(no+1)
        }, 2000)
        console.log("tr",timeRef.current)

    }
    return (
        <div id="topbanner">
        <div id="banner">
        {no%2==0 ? <div>EXTRA 10% OFF FINAL SALE | USE CODE | LAST CALL</div> : <div>FREE US SHIPPING ON $199 AND ABOVE SOPPING</div>}
        </div>
        </div>
    )
}

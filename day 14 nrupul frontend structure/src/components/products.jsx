import axios from "axios"
import { useEffect, useState } from "react"

export const Restorant = () => {
    const [prod, setProd] = useState([])
    const [q, setQ] = useState("")
    const [text, seText] = useState("")
    const [price, setPrice] = useState("asc")
    const [page, setPage] = useState(1)

    useEffect(() => {
        getData({ price, page, q })
    }, [price, page, q])
    const getData = ({ price, page, q }) => {
        axios({
            url: "http://localhost:8080/data",
            method: "get",
            params: {
                _limit: 9,
                _page: page,
                _sort: "cost",
                _order: price,
                q
            }
        }).then((items) => {
            setProd(items.data)
            //  console.log(items.data)
        })
    }
    const handlePrice = () => {
        setPrice("asc")
        console.log("asc")
    }
    const handlePrice2 = () => {
        setPrice("desc")

    }

    return (
        <div>
            <input value={text} placeholder="search  food" onChange={(e) => seText(e.target.value)} /> <button onClick={() => setQ(text)}>search</button><br />
            <button onClick={handlePrice}>Price high to low</button>
            <button onClick={handlePrice2}>low to High</button><br />
            <button disabled={page === 1} onClick={() => setPage(page - 1)} >prev</button>
            <button disabled={page === 5} onClick={() => setPage(page + 1)}>next</button>
            <div id="main">
                {
                    prod?.map((it, i) => (
                        <div id="single" key={i}>
                            <img src={it.image} />
                            <p>{it.name}</p>
                            <p>Rs {it.cost}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



import axios from "axios"
import { useEffect, useState } from "react"
import { SerachBox } from "./Searchbox"
import { ShowData } from "./show.data"

const getData = (q = "react", page = 1) => {
    return axios("https://api.github.com/search/repositories", {
        method: "GET",
        params: {
            q,
            per_page: 6,
            page
        }
    })
}
export const Github = () => {
    const [repo, setRep] = useState([])
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("React")
    //  console.log(repo)

    useEffect(() => {
        getData(query, page).then((res) => {
            setRep(res.data);
            console.log("repo", res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [query])
    const handleChange=(query)=>{
        setQuery(query)
        console.log(query)
    }
    return (
        <div>
            <h2>Github Users</h2>
            <SerachBox handleChange={handleChange}/>
            <div id="repo">
                {repo?.items?.map((item) => (
                    <ShowData key={item.id} {...item} />
                ))}
            </div>
           
        </div>
    )
}


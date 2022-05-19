import axios from "axios"
import { useEffect, useState } from "react"
import { SerachBox } from "./Searchbox"
import { ShowData } from "./show.data"

const getData = (q = "react", page = 1, sort = "asc") => {
    return axios(`https://api.github.com/search/repositories?_sort=${sort}`, {
        method: "GET",
        params: {
            q,
            per_page: 6,
            page,
            sort

        }
    })
}
export const Github = () => {
    const [repo, setRep] = useState([])
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("React")
    const [sort, setSort] = useState("desc")
    //  console.log(repo)

    useEffect(() => {
        getData(query, page, sort).then((res) => {
            setRep(res.data);
            console.log("repo", res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [query, page, sort])

    const handleChange = (query) => {
        setQuery(query)
        console.log(query)
    }

    const handleSet = () => {
        setSort("asc")
    }

    const handleSet1 = () => {
        setSort("desc")
    }
    
    return (
        <div>
            <h2>Github Users</h2>
            <SerachBox handleChange={handleChange} />
            <div id="repo">
                {repo?.items?.map((item) => (
                    <ShowData key={item.id} {...item} />
                ))}
                <div >
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                    <button onClick={handleSet}>sort</button>
                    <button onClick={handleSet1}>sort low to high</button>
                    <div id="pageno" >{page}{" "}page out of{" "}{(repo.total_count / repo.items).toFixed(0)}</div>
                </div>
            </div>

        </div>
    )
}


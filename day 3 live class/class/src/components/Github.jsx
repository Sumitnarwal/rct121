import axios from "axios"
import { useEffect, useState } from "react"
import { SerachBox } from "./Searchbox"


const getGithubUsers = (q = "sumit", page = 1) => {
  return axios("https://api.github.com/search/users", {
        method: "GET",
        params: {
            q,
            per_page: 5,
            page
        }
    })
}


export const Github = () => {
  //  const [loading, setloading] = useState(true)
  //  const [error, setError] = useState(false)
    const [query, setQuery] = useState("masai")
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
     //   setloading(true);
        getGithubUsers(query, page).then((res) => {
       //     setloading(false);
            setData(res.data);
       //     setError(false)
        }).catch((err) => {
    //        setloading(false)
        })
    }, [page,query])


    const handleClick = (query) => setQuery(query)
   // const handlePageChange=page=>setPage(page)
    console.log(data)
    return (
        <div>
            <h2>Github Users</h2>
          { 
            //    { loading && <div>...loading</div>}
            // {error && <div>...error</div>}
        }
            <SerachBox handleClick={handleClick} /> 
            {data?.items?.map((item) => (
                <GithubCard key={item.id} {...item} />
            ))}
            <div>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
            </div>
    )

}


const GithubCard = ({ avatar_url, login }) => {
    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            <img src={avatar_url} width="50px" height="50px" alt={login} />
            <div>{login}</div>
        </div>
    )
}
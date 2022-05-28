import { useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"
import { GitContext } from "../context/gitContext"
const initState = {
    loading: true,
    error: false,
    data: null
}

const GithubActions = {
    fetch: "fetch",
    success: "sucess",
    failure: "failure"
}

const GithubReducer = (state, action) => {
    switch (action.type) {
        case GithubActions.fetch: {
            return (
                {
                    ...state,
                    loading: true,
                    error: false,
                    data: null
                }
            )
        }
        case GithubActions.success: {
            return (
                {
                    ...state,
                    loading: true,
                    error: false,
                    data: action.payload
                }
            )
        }
        case GithubActions.failure: {
            return (
                {
                    ...state,
                    loading: false,
                    error: true
                }
            )
        }
        default: return state;
    }
}


export const Github = () => {
    const { search } = useContext(GitContext)
    const [page, setPage] = useState(1)
    const [{ loading, error, data }, dispatch] = useReducer(GithubReducer, initState)
    const [textser, setSertext] = useState("masai")
    useEffect(() => {
        getData({ search, page })

        console.log("frer", page)
    }, [search, page])

    // function Paginate(array, page_size, page_number) {
    //     return array.slice((page_number - 1) * page_size, page_number * page_size);
    // }

    const getData = ({ q = search, page = 1 }) => {
        dispatch({
            type: GithubActions.fetch
        });

        axios({
            url: "https://api.github.com/search/users",
            method: "GET",
            params: {
                per_page: 5,
                page,
                q

            }
        }).then((res) => {
            dispatch({
                type: GithubActions.success,
                payload: res.data
            })
            console.log(res.data)
        }).catch((err) => {
            dispatch({
                type: GithubActions.failure
            });
        })
    }
    const handleChange = (value) => {
        if (page >= 0) {
            setPage(page + value)
        }
    }
    return (
        <div>
            <div>
                <button disabled={page == 1} onClick={() => handleChange(-1)} >Prev</button>
                <button onClick={() => handleChange(1)}>Next</button>
            </div><hr />
            {
                data?.items?.map((item) => (
                    <div key={item.id}>{item.login}</div>
                ))

                //   data?.items? Paginate(data,5,page).map((el)=>{
                //  return  <div key={el.id}>{el.login}</div>
                //     }) :""

            }

        </div>
    )
}



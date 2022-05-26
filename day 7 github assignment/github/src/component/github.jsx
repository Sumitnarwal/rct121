import { useContext, useEffect, useReducer } from "react"
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
// export function Paginate(array, page_size, page_number) {
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
//   }
  
export const Github = () => {
    const { search } = useContext(GitContext)
    const [{ loading, error, data }, dispatch] = useReducer(GithubReducer, initState)

    useEffect(() => {
        getData({ search })
      //  console.log("frer", search)
    }, [search])

    const getData = ({  q=search }) => {
        dispatch({
            type: GithubActions.fetch
        });
        axios({
            url: "https://api.github.com/users",
            method: "GET",
            params: {
                q,
                _limit: 5

            }
        }).then((res) => {
            dispatch({
                type: GithubActions.success,
                payload: res.data
            })
        }).catch((err) => {
            dispatch({
                type: GithubActions.failure
            });
        })
    }
    return (
        <div>
            {data?.map((item) => (
                <div key={item.id}>{item.login}</div>
            ))}

        </div>
    )
}
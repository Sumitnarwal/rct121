
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";


export const AllProducts = () => {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(true)
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {

        axios({
            url: `http://localhost:8080/data/${params.id}`,
            method: "GET"
        }).then((w) => {
            
            setData(w.data)
            setLoading(false)
        }).catch((error)=>{
           setError(!error)
        })
    }, [params.id])
    //console.log(data)
    return (
        <div>
        {error?
            <div>
            {loading && <div>...Loading</div>}
            <h1>Detail Products</h1>
            <div> Name : {data?.name} </div>
            <div> Price : {data?.price} </div>
            </div>:
            <div><h1>404 error</h1></div> 
        }

        </div>
    )
}
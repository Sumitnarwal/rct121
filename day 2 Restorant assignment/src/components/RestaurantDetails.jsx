import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Pagination } from "./Pagination";
//import { RestDetails } from "./restDisplay";



export const RestaurantDetails = () => {
    const [hotel, setRes] = useState([]);
    const [page, setPage] = useState(1);
    const [priceOrder, setPriceOrder] = useState("asc")
    const [RatingOrder, setRatingOrder] = useState("asc")
    const [filterRating, setFilterRating] = useState(0);
    const [q,setQ]=useState("")
    const[text,setText]=useState("")
    // console.log("filterRating",filterRating)


    useEffect(() => {

        console.log("value", filterRating)
        getData({ page, priceOrder, RatingOrder, filterRating,q });

    }, [page, priceOrder, RatingOrder, filterRating,q])
     
    const getData = ({ page, priceOrder, RatingOrder, filterRating,q }) => {

        axios('http://localhost:8080/data', {
            method: "GET",
            params: {
                _limit: 6,
                _page: page,
                _sort: "cost,rating",
                _order: `${priceOrder},${RatingOrder}`,
                rating_gte: filterRating,
                q
            }
        })
            .then(resp => {
                console.log(resp.data)
                setRes(resp.data)
            }).catch(error => {
                console.log(error);
            });
    }

    const handleFilter = (value) => {
        setFilterRating(value)
    }
    return (
        <div>
            <Navbar handleFilter={handleFilter} />

            <div>Search Food</div>
            <input value={text} placeholder="search Fav food" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>setQ(text)}>Search</button>

            <div>Rating Sort</div>
            <button disabled={RatingOrder === "asc"} onClick={() => setRatingOrder("asc")}>Rating low to high</button>
            <button disabled={RatingOrder === "desc"} onClick={() => setRatingOrder("desc")}>Rating high to Low</button>
            <div>cost Sort</div>
            <button disabled={priceOrder === "asc"} onClick={() => setPriceOrder("asc")}>low to high</button>
            <button disabled={priceOrder === "desc"} onClick={() => setPriceOrder("desc")}>high to low</button>

            <div>page</div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>prev</button>
            <button disabled={page === 7} onClick={() => setPage(page + 1)}>next</button>
            <Pagination currentPage={page} lastPage={6} onPageChange={setPage} />
            {
                hotel.map((l, i) => (

                    <div key={i} id="restid">
                        <div><img src={l.image} /></div>
                        <div id="h12">
                            <h3>{l.name}</h3>
                            <div>{"₹ "}{l.cost}</div><br />
                            {l.food}<br /><br /><br />
                            {"Cost ₹"}{" "}{l.forOne} {"for one"}
                        </div>
                        <div id="r1">
                            {l.rating}{" star"}<br />
                            {l.Votes} Votes<br />
                            {l.reviews} Reviews<br />
                        </div>
                    </div>
                ))


            }



        </div>

    )
}



/// <RestDetails key={i} forOne={l.minPrice} name={l.Name} img={l.image} rating={l.rating} food={l.food} vote={l.Votes} reviews={l.reviews} />
//    const getData=async ()=>{
//        const data= await fetch(`http://localhost:8080/data?_page=${page}&_limit=4`).then((d) => d.json()
//        );
//        setRes(data)
//      console.log(hotel)

//     }
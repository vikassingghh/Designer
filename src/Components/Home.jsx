import Products from "./Products.json";
import Simmer from "./Simmer";
import Card from "./Card";
import { useEffect, useState } from "react";
const Data = Products.products;
const Home = () =>{
    
    const [alldata, setalldata] = useState([]);
    const[proData, setproData] = useState([]);
    const [query, setquery] = useState("");

    let fun = async() =>{
        let rawdata = await fetch('https://dummyjson.com/products');
        let jsondata = await rawdata.json();
        setalldata(jsondata.products);
        setproData(jsondata.products);
    }
    useEffect(()=>{
        fun()
    },[])

    if(alldata.length==0){
        return <Simmer></Simmer>
    }

    const handleToprated =() => {
        let filtered = alldata.filter((obj)=>{
            return obj.rating >3.8;
        })
        setproData(filtered);
    }

    const handleCategory = (category) => {
        let fildered = alldata.filter((item)=>{
            return item.category==category;
        })
        setproData(fildered);
    }

    const handleDiscount = () =>{
        let filtered = alldata.filter((item)=>{
            return item.discountPercentage >15;
        })
        setproData(filtered);
    }

    const handleSearch =()=>{
        let filtered = alldata.filter((a)=>{
            return a.title.toLowerCase().includes(query.toLowerCase());
        })
        setproData(filtered);
        setquery("");
    }


    return(
        <>
        <div className=" my-5">
            <div className="flex justify-around">
            <button className="btn btn-active btn-secondary " onClick={handleToprated}>Top Rated</button>
            <button className="btn btn-active btn-secondary" onClick={()=>handleCategory("beauty")}>Beauty</button>
            <div className="flex gap-5">
                <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" value={query} onChange={(e)=>{setquery(e.target.value)}}/>
                <button className="btn btn-accent" onClick={handleSearch}>Search</button>
            </div>
            <button className="btn btn-active btn-secondary" onClick={()=>handleCategory("groceries")}>Groceries</button>
            <button className="btn btn-active btn-secondary" onClick={handleDiscount}>High Discount</button>
            </div>
            <div className="flex flex-wrap justify-around">

            {
                proData.map(item => {
                    return(
                        <Card key={item.id} products={item}></Card>
                    )
                    
                })
            }
            </div>
        </div>
        </>
    )
    
}
export default Home;
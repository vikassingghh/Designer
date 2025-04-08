import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/CartSlice";

const Card = ({products}) =>{
    let dispatch = useDispatch()
    let Navigate = useNavigate();
    let handleRouting =() =>{
        Navigate(`/product/${products.id}`)
    }
    const handleBuyNow = (event) =>{
        dispatch(addCart(products));
        event.stopPropagation();
    }
    return (
        <>
            
            <div className="card card-compact  bg-white shadow-xl m-5 w-72 h-96" onClick={handleRouting}>
                <figure><img src={products.images[0]} alt="" width={100} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{products.title}</h2>
                    <p>{products.description}</p>
                    <p>Price: {products.price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </div>

            
        </>
    )
};

export default Card;
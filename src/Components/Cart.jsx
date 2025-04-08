import CartRow from "./CartRow";
import { clearCart } from "../Store/CartSlice";
import { useSelector, useDispatch } from 'react-redux';

const Cart = () =>{
    let dispatch = useDispatch();
    let cartItems = useSelector((store)=>store.cart.items);
    return(
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cartItems.map((item)=> (
            <CartRow cartObj={item}></CartRow>
        ))
      }
      
    </tbody>
  </table>
  <center>
    
  <button className="btn btn-error" onClick={()=> dispatch(clearCart())} >CLEAR CART</button>
  </center>
  
</div>
    )
}
export default Cart;
import React from 'react'
import { removeCart } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';

const CartRow = ({cartObj}) => {
    console.log(cartObj);
    let{objData, quantity} = cartObj;
    let {thumbnail, title, rating, price,id} = objData;
    let dispatch = useDispatch();
  return (
    <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                   src={thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>${price}</td>
        <td>
          {rating}
        </td>
        <td>{quantity}</td>
        <th>
        <button className="btn btn-outline btn-error" onClick={()=>dispatch(removeCart(id))}>Remove Item</button>
        </th>
      </tr>
  )
}

export default CartRow

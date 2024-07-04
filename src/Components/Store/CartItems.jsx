import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/storeslices/CartSlice';
import { toast } from 'react-toastify';

const CartItems = ({item, itemIndex}) => {

    const dispatch = useDispatch();
    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

  return (
    <div>
        <div className='flex justify-between'>
            <div>
                <img src={item.image} alt='Item_image' />
            </div>

            <div>
                <h1>{item.title}</h1>
                <h1>{item.ddescription}</h1>
                <div>
                    <p>{item.price}</p>
                    <div
                    onClick={removeFromCart}>
                        <FcDeleteDatabase />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CartItems

import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import images from '../assets/logo.svg'
import { clearAll, removeItemFromCart, setCartCount, setCartItem } from '../features/cartSlice';

const Cart = () => {

    const { cartOpen, cartItem, cartCount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleDelete = (item) => {
        dispatch(removeItemFromCart(item))
        
    }

    const handleDecrease = () => {
       
    }
    
    const handleClear = () => {
        dispatch(clearAll())
    }
    const handleIncrease = (item) => {
        dispatch(setCartItem(item))
        dispatch(setCartCount())
}

    return (
    <>
            {cartItem?.map((item, index) => {
            return(
            <div className='CartItem'>
            <div>
                    <h3>{item.title}</h3>
            <div className="information">
            <p>Price: $ {item.price}</p>
            <p>Total: $ {(1 * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() =>handleDecrease(item)}
              >
                -
              </Button>
            <p></p>
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => handleIncrease(item)}
              >
                +
              </Button>
            </div>
          </div>
          <img className='CartImg' src={item.image} alt="item.title"/>
          
                    </div>
            )
        })}
   
  </>
  )
}

export default Cart
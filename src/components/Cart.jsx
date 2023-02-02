import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import images from '../assets/logo.svg'

const Cart = () => {

    const { cartOpen, cartItem, cartCount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();




    return (
   <div className='CartItem'>
    <div>
    <h3>item.title</h3>
    <div className="information">
      <p>Price: $item.price</p>
      <p>Total: $(item.amount * item.price).toFixed(2)</p>
    </div>
    <div className="buttons">
      <Button
        size="small"
        disableElevation
        variant="contained"
        // onClick={() => removeFromCart(item.id)}
      >
        -
      </Button>
      <p>item.amount</p>
      <Button
        size="small"
        disableElevation
        variant="contained"
        // onClick={() => addToCart(item)}
      >
        +
      </Button>
    </div>
  </div>
  <img className='CartImg' src={images} alt="item.title"/>
  
  </div>

  )
}

export default Cart
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { clearAll, removeItemFromCart, setCartCount, setcartDecrease, setCartItem } from '../features/cartSlice';

const Cart = () => {
    let total = 0
    let subtotal =0
    
    const { cartCount, cartItem, filterCartItem } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const[decValue,setDecValue]= useState()

    const handleDelete = (item) => {
        dispatch(removeItemFromCart(item))
        
    }

    const handleDecrease = (item) => {
      if((cartItem?.filter((i) => i?.id === item?.id)).length >1){
            let index = cartItem?.findIndex((i) => i === item)
            let arrayforchange = [...cartItem]
            arrayforchange.splice(index, 1)
            dispatch(setcartDecrease(arrayforchange))
            dispatch(setCartCount())
        }
        console.log((cartItem?.filter((i) => i?.id === item?.id)).length)
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
             <Box>
                    <div style={{display:"flex" , justifyContent:"center"}} >
                        

                            {filterCartItem?.map((item, index) => {

                           
                                return (
                                    <div style={{ display: "flex", justifyContent:"center"}} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt={item?.title}
                                            height="100"
                                            image={item?.image}
                                            style={{ objectFit: "contain", background: "white", maxWidth: 70, minWidth: 70 }}
                                        />


                                    </Card>

                                    <Card sx={{
                                        width: 250,
                                        height: 150,
                                    }}

                                    >
                                        <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>
                                                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                                    {item?.title}
                                                </Typography>

                                                <Typography sx={{ fontSize: 14, color: "red", fontWeight: "bold" }} >
                                                    {item?.price} $
                                                </Typography>
                                                <div style={{ fontSize: 12, color: "black", fontWeight: "bold", display: "flex", justifyContent: "flex-start" }} >

                                                    <TextField id="outlined-basic" variant="outlined"
                                                        value={(cartItem?.filter((i) => i?.id === item?.id)).length}
                                                        size="small" />
                                                    <div>
                                                        <ArrowDropUpIcon style={{ height: "1rem" }} onClick={() => handleIncrease(item)} />
                                                        <ArrowDropDownIcon style={{ height: "1rem" }}
                                                            onClick={() => handleDecrease(item)} />
                                                    </div>


                                                </div>
                                            </div>
                                            <div>
                                                <DeleteForeverIcon
                                                    onClick={() => handleDelete(item)} />
                                            </div>

                                        </CardContent>

                                    </Card>



                                </div>)
                            })
                        }
                    </div>

                <Typography id="modal-modal-description" sx={{ mt: 2, mr: 10 }} style={{ textAlign:"center"}}>
                    {/* Subtotal({cartCount} items) : {(cartItem?.reduce((acc, item) => acc + item?.price, 0))} */}
                    {filterCartItem?.map((item) => {
                        subtotal = subtotal + (cartItem.filter((i)=> i.id === item.id).length * item.price)
                    })}
                     Subtotal({cartCount} items) : 
                    {subtotal}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 ,display:"flex",justifyContent:"center"}}>

                        <Button size="small" style={{ background: "orange", color: "white" ,textAlign:"center", marginRight:5 }}>BUY NOW</Button>
                        <Button size="small" style={{ background: "grey", color: "black" }}
                            onClick={handleClear}>CLEAR CART</Button>
                    </Typography>
                </Box>
   
  </>
  )
}

export default Cart
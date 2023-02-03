import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cart from '../components/Cart'

const CartPage = () => {
  const navigate = useNavigate()
  const {  cartCount } = useSelector((state) => state.cart);
  
  
      //??**** sepet boşşsa 
    // <div style={{height:"50vh"}}>
    //   <Box sx={{ textAlign: "center" , height:"100%"}}>
    //     <h2 style={{ marginTop: "5rem" }}>Your cart is empty</h2>
    //     <button onClick={()=>navigate("/products")}>Fill it</button>
    //   </Box>
    // </div>
      
    
  

  return (

    <>
      {!cartCount && 
     ( <div style={{height:"50vh"}}>
      <Box sx={{ textAlign: "center" , height:"100%"}}>
        <h2 style={{ marginTop: "5rem" }}>Your cart is empty</h2>
        <Button size="small" style={{ background: "grey", color: "black" }}
                            onClick={()=>navigate("/products")}>FILL IT</Button>
      </Box>
        </div>)}
      {cartCount && (
        <>
        <div style={{height:"150px", backgroundColor:"#eaded7" , display:"flex" , alignItems:"center"}}>
        <h1 style={{padding:"2rem 2rem 2rem 9rem" }}><a style={{textDecoration:"none", color:"#795744"}} href="/">Home / </a>About</h1>
    </div> 
    
          <Cart />
          </>
      )}
    
    </>
    
  )
}

export default CartPage
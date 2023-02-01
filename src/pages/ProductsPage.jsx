import React from 'react'

import Product from '../components/Product'

const ProductsPage = () => {
  return (
    <>
      <div style={{height:"150px", backgroundColor:"#eaded7" , display:"flex" , alignItems:"center"}}>
        <h1 style={{padding:"2rem 2rem 2rem 7rem" }}><a style={{textDecoration:"none", color:"#795744"}} href="/">Home / </a>Product</h1>
    </div>
      <Product/>
    </>
  )
}

export default ProductsPage
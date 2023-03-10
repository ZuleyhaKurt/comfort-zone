import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCartCount, setCartItem, setFilterCartItem } from '../features/cartSlice';

import {addToFavoriteList, removeFromFavouriteList} from "../features/favoriteSlice"

const CardCom = ({ item, index }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { favoriteList } = useSelector(state => state.favorite)
    const {  cartItem ,cartCount,filterCartItem} = useSelector((state) => state.cart);


    const handleAddToCart = (item) => {
        dispatch(setCartItem(item))
        dispatch(setCartCount())
        console.log(filterCartItem.filter((i) => i.id !== item.id).length)
        if (!filterCartItem.length) {
            dispatch(setFilterCartItem(item))
        }
        else if  (!filterCartItem.map((i) => i.id).includes(item.id)
        ) {
            dispatch(setFilterCartItem(item))
        }
     }

 
  
    const handleFavorite = (item) => {
      
      if (favoriteList.map((i)=>i.id).includes(item.id)) {
        dispatch(removeFromFavouriteList(item))
     }
     else {
      dispatch(addToFavoriteList(item))
     }
    
    }

    console.log(cartItem)
    console.log(cartCount)
    console.log(filterCartItem)

  return (
      <>
      <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index} onClick={() => { navigate("/details", { state: item }) }}>
                  <CardMedia
                          component="img"
                          width="175"
                    height="175"
                    image={item?.image}
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.price}$
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>handleAddToCart(item)} size="small">Add to Cart</Button>
                    <Button  size="small" target="_blank" onClick={() => handleFavorite(item)}>
           
                   {favoriteList?.map((i)=>i.id).includes(item.id)  ? <FavoriteRoundedIcon sx={{fill:"red"}}/> : <FavoriteBorderIcon/>}   
                    
                    </Button>
                  </CardActions>
                </Card>
      </>
  )
}

export default CardCom
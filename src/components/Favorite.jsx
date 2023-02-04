import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux'
import { setCartCount, setCartItem, setFilterCartItem } from '../features/cartSlice'

const Favorite = () => {
    const dispatch = useDispatch()
    const { favoriteList } = useSelector(state => state.favorite)
    const {  filterCartItem} = useSelector((state) => state.cart);

    const handleAddFavorite = (item) => {
        dispatch(setCartItem(item))
        dispatch(setCartCount())
       
        if (!filterCartItem.length) {
            dispatch(setFilterCartItem(item))
        }
        else if  (!filterCartItem.map((i) => i.id).includes(item.id)
        ) {
            dispatch(setFilterCartItem(item))
        }
    };
console.log(filterCartItem)
    return ( 
        <>
              {favoriteList.length ? (
                <Box >
                     <div style={{height:"150px", backgroundColor:"#eaded7" , display:"flex" , alignItems:"center"}}>
                     <h1 style={{padding:"2rem 2rem 2rem 9rem" }}><a style={{textDecoration:"none", color:"#795744"}}  href="/">Home / </a>Favorite</h1>
                     </div> 
 
                    <div style={{ display: "flex", justifyContent: "center" }}>
                {favoriteList?.map((item, index) => {
                    return (
                        <Card sx={{ maxWidth: 300, m: 5, maxHeight: 600, minWidth: 300 }} key={index} >
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
                                <Button onClick={() => handleAddFavorite(item)} size="small">Add to Cart</Button>
                                
                            </CardActions>
                        </Card>
                    )
                })}
                    </div>
                    </Box>
        ) : (
           <div style={{height:"50vh"}}>
      <Box sx={{ textAlign: "center" , height:"100%"}}>
        <h2 style={{ marginTop: "5rem" }}>Your list is empty</h2>
       
      </Box>
    </div>
        )

        }
            
   
  </>      
              )
}

export default Favorite
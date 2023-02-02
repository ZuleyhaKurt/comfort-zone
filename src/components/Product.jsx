import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct,setFinalList,setProduct } from '../features/productSlice';
import loadinGif from "../assets/loading.gif";
import Filter from "./Filter";
import SortList from "./SortList";

const Product = () => {
  const { productList, loading, error } = useSelector((state) => state.product);
  const { categoryList,choosen, } = useSelector((state) => state.category);
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getProduct())
      // return () => {
      //   dispatch(setFinalList(productList))
      // }
      
    }, [])
 

    return (
    <>
        {error && (
            <Typography variant="h3" color="error" align="center" mt={20}>
              {error}
            </Typography>
          )}
          {loading && (
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src={loadinGif} />
            </Box>
          )}
          {!loading && (
                <Box sx={{ display: "flex", flexDirection: "row", m: "5rem" }}>
            <Filter />
            <Box>
              <SortList/>
                <Box sx={{}}
             xs={{ d: "flex" }}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              flexWrap="wrap"
            >
            {  (categoryList?.length ? categoryList : productList)?.map((item, index) => (
                <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
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
                    <Button size="small">Add to Basket</Button>
                    <Button size="small" target="_blank">
                     Like
                    </Button>
                  </CardActions>
                </Card>
            ))}
                </Box>
                    </Box>
                    </Box>
            )}
            </>
    )
}
export default Product;
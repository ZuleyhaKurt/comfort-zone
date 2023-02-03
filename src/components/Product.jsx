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
import CardCom from "./CardCom";

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
  
  // const handleAddToCart = (item) => {
    
  // }
 

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
              <CardCom item={item} index={index} />
            ))}
                </Box>
                    </Box>
                    </Box>
            )}
            </>
    )
}
export default Product;
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import React , { useEffect } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { getProduct} from '../features/productSlice';
import loadinGif from "../assets/loading.gif";
import Filter from "./Filter";
import SortList from "./SortList";
import CardCom from "./CardCom";

const Product = () => {
  const { productList, loading, error ,finalList} = useSelector((state) => state.product);

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getProduct())
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
              <img src={loadinGif} alt="load" />
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
            {  (finalList?.length ? finalList : productList)?.map((item, index) => (
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
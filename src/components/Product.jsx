import { Card } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, } from '../features/productSlice';

const Product = () => {
    const { productList } = useSelector((state) => state.product);
    
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <>
            <Card>{productList?.img}</Card>
        </>
    )
}
export default Product;
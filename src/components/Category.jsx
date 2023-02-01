import { Box, Button, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux';
import {  setChoosen,setCategoryList } from '../features/categorySlice'
import { setFinalList } from '../features/productSlice';


const Category = () => {
    const dispatch = useDispatch();

    const { categoryList,choosen, } = useSelector((state) => state.category);
    const { productList } = useSelector((state) => state.product);
  

    
    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(setChoosen(e.target.value))
        console.log(productList)
        dispatch(setCategoryList(productList?.filter((item) =>  item?.category == e.target.value )))
        // console.log(choosen)
        console.log(e.target.value)
       dispatch(setFinalList(categoryList?.length? categoryList : productList))

      

     }
    
     console.log(categoryList)
    return (

        <div>
            <Typography variant="h6">Category</Typography>
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"start"}}>
            <Button sx={{color:"grey"}} value="" onClick={handleSubmit} variant="string" >All</Button>
            <Button sx={{color:"grey"}} value="office" onClick={handleSubmit} variant="text" >Office</Button>
            <Button sx={{color:"grey"}} value="living room" onClick={handleSubmit} variant="text">Livingroom</Button>
            <Button sx={{color:"grey"}} value="kitchen" onClick={handleSubmit} variant="text">Kitchen</Button>
            <Button sx={{color:"grey"}} value="bedroom" onClick={handleSubmit} variant="text">Bedroom</Button>
            <Button sx={{color:"grey"}} value="dining"onClick={handleSubmit} variant="text">Dining</Button>
            <Button sx={{color:"grey"}} value="kids" onClick={handleSubmit}  variant="text">Kids</Button>
          </Box>
      </div>
  )
}

export default Category
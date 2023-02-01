import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, setChoosen } from '../features/categorySlice'
import { getFilter } from '../features/filterSlice';

const Category = () => {
    const dispatch = useDispatch();

    const { categoryList, loadingCategory, errorCategory } = useSelector((state) => state.category);
  

    
    const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(setChoosen(e.target.value))
    //     dispatch(getCategory())

      

     }
    
  
    return (

        <div>
            <Typography variant="h6">Category</Typography>
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"start"}}>
            <Button sx={{color:"grey"}} value="All" onClick={handleSubmit} variant="string" >All</Button>
            <Button sx={{color:"grey"}} value="office" onClick={handleSubmit} variant="text" >Office</Button>
            <Button sx={{color:"grey"}} value="livingroom" onClick={handleSubmit} variant="text">Livingroom</Button>
            <Button sx={{color:"grey"}} value="kitchen" onClick={handleSubmit} variant="text">Kitchen</Button>
            <Button sx={{color:"grey"}} value="bedroom" onClick={handleSubmit} variant="text">Bedroom</Button>
            <Button sx={{color:"grey"}} value="dining"onClick={handleSubmit} variant="text">Dining</Button>
            <Button sx={{color:"grey"}} value="kids" onClick={handleSubmit}  variant="text">Kids</Button>
          </Box>
      </div>
  )
}

export default Category
import { Box, Button, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux';

import {  setCategory,} from '../features/categorySlice'
import {  setFinalList } from '../features/productSlice';


const Category = () => {
    const dispatch = useDispatch();

   
    const { productList,  company, search} = useSelector((state) => state.product);
  

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hellooooo")
        console.log(e.target.value)
        dispatch(setCategory(e.target.value))
        console.log(productList)
       // burada prıduct u değiştirecek filtreleyecek olan fonksiyonu çağıracağız
       
      //  console.log(productList?.filter((item) => (item?.category === category)))
        

        if(!company && !search){
            dispatch(setFinalList(productList?.filter((item) => (item?.category === e.target.value))))
        }else if(!company){
            dispatch(setFinalList(productList?.filter((item) => (item?.category === e.target.value && item?.name.includes(search)))))
          console.log("hello")
        }else if(!search){
             dispatch(setFinalList(productList?.filter((item) => (item?.category === e.target.value && item?.company === company))))
        }else {
            dispatch(setFinalList(productList?.filter((item)=>(item?.category === e.target.value && item?.company === company && item?.name.includes(search))))) 
            
        }
        
       

     }
    

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
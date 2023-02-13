import { Button, Checkbox, FormControl, FormControlLabel, FormGroup,  MenuItem, Select, Slider,  Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Category from './Category'
import SearchComp from './SearchComp'

import { setCompany, setFinalList } from '../features/productSlice';

const Filter = () => {

  const dispatch = useDispatch();
  const { category, } = useSelector((state) => state.category);
  const { productList, search ,company} = useSelector((state) => state.product);

  const [rakam, setRakam]= useState()
    
  function valuetext(value) {
        setRakam(value)
        return  `${value}`
        
      
  }
  



  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    dispatch(setCompany(e.target.value))
    console.log(productList)
 
    //  productList.filter((item)=>(item.category === category && item.company == company))
    //  console.log(productList?.filter((item) => (item?.company === company)))
    if (!category && !search) {
      dispatch(setFinalList(productList?.filter((item) => (item?.company === e.target.value))))
   
    } else if (!category) {
      dispatch(setFinalList(productList?.filter((item) => (item?.company === e.target.value && item?.name.includes(search)))))
    } else if (!search) {
      dispatch(setFinalList(productList?.filter((item) => (item?.company === e.target.value && item?.category === category))))
    } else {
      dispatch(setFinalList(productList?.filter((item) => (item?.category === category && item?.company === e.target.value && item?.name.includes(search)))))
   
    }
 


  }

  return (
    <FormGroup  sx={{width:"10vw",my:"3rem", mx:"2rem", gap:"1rem"}}>
       <SearchComp/>
        <Category/>
        <Typography variant="h6">Company</Typography>
        <FormControl fullWidth>
        
        <Select
        sx={{width:"4rem", height:"2rem"}}
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            // label={value}
            onChange={handleChange}
        >
           
            <MenuItem value="">all</MenuItem>
            <MenuItem value="marcos">marcos</MenuItem>
            <MenuItem value="liddy">liddy</MenuItem>
            <MenuItem value="ikea">ikea</MenuItem>
            <MenuItem value="caressa">caressa</MenuItem>
        </Select>
        </FormControl>
        <Typography variant="h6">Color</Typography>
          <Box display="flex" sx={{gap:1}} >
        <button sx={{color:"black"}} variant="text" style={{border:"none"}}>All</button>
              <button  style={{width:"1rem",height:"1rem", backgroundColor:"pink",borderRadius:"50%" , border:"none"}} variant="text"></button>
              <button  style={{width:"1rem",height:"1rem", backgroundColor:"green",borderRadius:"50%",border:"none"}} variant="text"></button>
              <button  style={{width:"1rem",height:"1rem", backgroundColor:"blue",borderRadius:"50%",border:"none"}} variant="text"></button>
              <button  style={{width:"1rem",height:"1rem", backgroundColor:"grey",borderRadius:"50%",border:"none"}} variant="text"></button>
              <button  style={{width:"1rem",height:"1rem", backgroundColor:"yellow",borderRadius:"50%",border:"none"}} variant="text"></button>

        </Box>
        <Typography variant="h6">Price</Typography>
        <Box sx={{width:"10rem"}}>
        <Typography variant="h6">{rakam}$</Typography>
        <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
            />
            </Box>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Free Shipping" />
        <Button variant="contained" sx={{background:"orange", width:"10rem", display:"block", mx:"auto", mb:"2rem"}}>Clear Filters</Button>  
    </FormGroup>
  )
}

export default Filter
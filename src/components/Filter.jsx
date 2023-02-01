import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Filter = () => {

    const [rakam, setRakam]= useState()
    
    // function valuetext(value: number) {
    //     return (
    //         `${value}`,
    //         setRakam(value)
    //     )
    //   }

  return (
    <FormGroup  sx={{width:"10vw",my:"3rem", mx:"2rem", gap:"1rem"}}>
        <input id="outlined-basic" label="Search" variant="outlined" style={{height:"2rem" , borderRadius:"0.3rem",border:"none" , borderStyle:"none",backgroundColor:"#f1f5f8" , }} placeholder="Search"   />
        <Typography variant="h6">Catagory</Typography>
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"start"}}>
                <Button sx={{color:"grey"}} variant="string" >All</Button>
                <Button sx={{color:"grey"}} variant="text" >Office</Button>
                <Button sx={{color:"grey"}} variant="text">Livingroom</Button>
                <Button sx={{color:"grey"}} variant="text">Kitchen</Button>
                <Button sx={{color:"grey"}} variant="text">Bedroom</Button>
                <Button sx={{color:"grey"}} variant="text">Dining</Button>
                <Button sx={{color:"grey"}} variant="text">Kids</Button>
        </Box>
        <Typography variant="h6">Company</Typography>
        <FormControl fullWidth>
        
        <Select
        sx={{width:"4rem", height:"2rem"}}
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            // label={value}
            // onChange={handleChange}
        >
           
            <MenuItem value={10}>all</MenuItem>
            <MenuItem value={20}>marcos</MenuItem>
            <MenuItem value={30}>liddy</MenuItem>
            <MenuItem value={40}>ikea</MenuItem>
            <MenuItem value={50}>caressa</MenuItem>
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
            // getAriaValueText={valuetext}
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
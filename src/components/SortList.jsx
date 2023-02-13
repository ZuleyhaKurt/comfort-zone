import { Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryList } from '../features/categorySlice';
import {  setFinalList, setProduct, } from '../features/productSlice';

const SortList = () => {

    const { productList,finalList} = useSelector((state) => state.product);
   
    const dispatch = useDispatch();

    const handleChange = (e) => {
       
            if (e.target.value === "Lowest") {
                let descendingOrder = [...(finalList?.length ? finalList : productList).values()].sort((a, b) => a.price - b.price)
                // dispatch(setSortingList(descendingOrder))
                finalList?.length ?  dispatch(setFinalList(descendingOrder))  : dispatch(setProduct(descendingOrder))
                  
 
            } else if (e.target.value === "Highest") {
                let ascendingOrder = [...(finalList?.length ? finalList :productList).values()].sort((a, b) => b.price - a.price)
                // dispatch(setSortingList(ascendingOrder))
                finalList?.length ?  dispatch(setFinalList(ascendingOrder))  : dispatch(setProduct(ascendingOrder))
            }
            
        if (e.target.value === "ZtoA") {
            let alfabeticOrder = [...(finalList?.length ? finalList : productList).values()].sort((a, b) => -1 * a.name.localeCompare(b.name))
            finalList?.length ?  dispatch(setFinalList(alfabeticOrder))  : dispatch(setProduct(alfabeticOrder))
        }
        else if (e.target.value === "AtoZ") {
            let nonAlfabeticOrder = [...(finalList?.length ? finalList : productList).values()].sort((a, b) => -1 * b.name.localeCompare(a.name))
            finalList?.length ?  dispatch(setFinalList(nonAlfabeticOrder))  : dispatch(setProduct(nonAlfabeticOrder))
        }
        
       

    }
    // console.log(sortingList)
    // console.log(finalList)

  return (
      <>
          <Box display="flex" alignItems="center"sx={{gap:5 , mt:5 , ml:5}} >
              <p>{(finalList?.length ?   finalList : productList)?.length} Products Found</p>
              <hr  style={{ width:"50%", display: "block",
                  border: "none",
    borderBottom:"1px solid #808080",
    borderTop:"none",
    overFlow: "hidden"}}/>
              <label htmlFor="">Sort By</label>
              <select onChange={handleChange} style={{borderStyle:"none"}} >
                
                  <option value="Lowest">Price(Lowest)</option>
                  <option value="Highest">Price(Highest)</option>
                  <option value="AtoZ">Price(Name(A-Z))</option>
                  <option value="ZtoA">Price(Name(Z-A))</option>
              </select>
        </Box>
      </>
  )
}

export default SortList
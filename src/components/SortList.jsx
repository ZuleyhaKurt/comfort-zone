import { Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFinalList, setSortingList } from '../features/productSlice';

const SortList = () => {

    const { productList, finalList, sortingList } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.value === "Highest") {
            let descendingOrder = [...finalList.values()].sort((a, b) => a.price - b.price)
            dispatch(setSortingList(descendingOrder))
       

        } else if (e.target.value === "Lowest") {
            let ascendingOrder = [...finalList.values()].sort((a, b) => b.price - a.price)
            dispatch(setSortingList(ascendingOrder))
           
        }
            dispatch(setFinalList(sortingList))
       

    }
    console.log(sortingList)
    console.log(finalList)

  return (
      <>
          <Box display="flex" alignItems="center"sx={{gap:5 , mt:5 , ml:5}} >
              <p>{finalList?.length} Products Found</p>
              <hr  style={{ width:"50%", display: "block",
                  border: "none",
    borderBottom:"1px solid #808080",
    borderTop:"none",
    overFlow: "hidden"}}/>
              <label htmlFor="">Sort By</label>
              <select onChange={handleChange} style={{borderStyle:"none"}} >
                
                  <option value="Lowest">Price(Lowest)</option>
                  <option value="Highest">Price(Highest)</option>
                  <option value="A to Z">Price(Name(A-Z))</option>
                  <option value="Z to A">Price(Name(Z-A))</option>
              </select>
        </Box>
      </>
  )
}

export default SortList
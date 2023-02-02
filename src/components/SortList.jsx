import { Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryList } from '../features/categorySlice';
import { setFinalList, setProduct, setSortingList } from '../features/productSlice';

const SortList = () => {

    const { productList, finalList, sortingList } = useSelector((state) => state.product);
    const { categoryList,choosen, } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (!categoryList?.length) {
            if (e.target.value === "Lowest") {
                let descendingOrder = [...productList.values()].sort((a, b) => a.price - b.price)
                // dispatch(setSortingList(descendingOrder))
                dispatch(setProduct(descendingOrder))

            } else if (e.target.value === "Highest") {
                let ascendingOrder = [...productList.values()].sort((a, b) => b.price - a.price)
                // dispatch(setSortingList(ascendingOrder))
                dispatch(setProduct(ascendingOrder))
            }
            
        }
           if(categoryList?.length){
            if (e.target.value === "Lowest") {
                let descendingOrder = [...categoryList.values()].sort((a, b) => a.price - b.price)
                // dispatch(setSortingList(descendingOrder))
                dispatch(setCategoryList(descendingOrder))
       

            } else if (e.target.value === "Highest") {
                let ascendingOrder = [...categoryList.values()].sort((a, b) => b.price - a.price)
                // dispatch(setSortingList(ascendingOrder))
                dispatch(setCategoryList(ascendingOrder))
            }
        }
       

    }
    // console.log(sortingList)
    // console.log(finalList)

  return (
      <>
          <Box display="flex" alignItems="center"sx={{gap:5 , mt:5 , ml:5}} >
              <p>{(categoryList?.length ?   categoryList : productList)?.length} Products Found</p>
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
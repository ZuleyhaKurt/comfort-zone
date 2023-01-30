import {configureStore} from "@reduxjs/toolkit"
import productReducer from '../features/productSlice/productSlice'


const store = configureStore({
    reducer: {
        product: productReducer,
    }
})

export default store;
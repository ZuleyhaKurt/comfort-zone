import {configureStore} from "@reduxjs/toolkit"
import productReducer from '../features/productSlice'
import categoryReducer from '../features/categorySlice'
import cartReducer from '../features/cartSlice'
const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
    }
})

export default store;
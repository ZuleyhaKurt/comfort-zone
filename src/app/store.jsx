import {configureStore} from "@reduxjs/toolkit"
import productReducer from '../features/productSlice'
import categoryReducer from '../features/categorySlice'
import cartReducer from '../features/cartSlice'
import favoriteReducer from '../features/favoriteSlice'
const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
    }
})

export default store;
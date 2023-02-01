import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import store from "../app/store";

const initialState = {
    categoryList: [],
    choosen: "",
    loadingCategory: false,
    errorCategory: false,
};

export const getCategory = createAsyncThunk(
    "getCategory", //! action types

    async (thunkAPI, { rejectWithValue }) => {
        //! asyn callback function
        const url = 'https://course-api.com/react-store-products';
        const selected = store.getState().category.choosen 
        try {
            const { data } = await axios(url);
            const result= data.filter((item) =>  item.category == selected ) 
            return(
              result
            );
        } catch (error) {
             return rejectWithValue("Something went wrong");
        }
    }
);


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setChoosen: (state, { payload }) => {
            state.choosen = payload;

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategory.fulfilled, (state, { payload }) => {
                state.categoryList = payload;
                state.loadingCategory = false;
             })
            .addCase(getCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorCategory = payload;
            });
    },
});

export const { setChoosen } = categorySlice.actions;

export default categorySlice.reducer;
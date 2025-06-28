import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/get', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

export const productSlice = createSlice({
  name:"products",
    initialState:{
        products:[],
        loading:false,
        loadMoreCount:1,
        error:null
    },
    reducers:{
        setLoadMoreCount:(state)=>{
            state.loadMoreCount+=1;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.loading=true;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})


export const {setLoadMoreCount} = productSlice.actions;
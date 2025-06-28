import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product.slice";


export const store = configureStore({
    reducer:{
         productSlice: productSlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
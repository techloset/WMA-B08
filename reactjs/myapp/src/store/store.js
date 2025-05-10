import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        // Add your reducers here
    },
});
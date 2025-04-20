import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        isLogin: false,
        user:{
            name: "",
            email: "",
            password: ""
        }
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogin: (state, action) => {
            state.isLogin = action.payload;
        }
    }
})


export const { setUser, setLogin } = userSlice.actions;

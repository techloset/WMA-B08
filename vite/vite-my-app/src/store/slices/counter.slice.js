import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetchProducts is an async thunk that fetches products from an API

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/products');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

// fetch posts from an API
export const fetchPosts = createAsyncThunk('posts/fetch', async (data,state) => {
    console.log("component data received",data);
    const page = data.page;
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
})


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 6,
        userName: "Ali",
        posts: [],
        products: [
            { id: 1, name: "Product 1", price: 100 },
            { id: 2, name: "Product 2", price: 200 },
            { id: 3, name: "Product 3", price: 300 },
        ]
    },
    reducers: {
        increment: (state) => {
            console.log("increment action called");
            
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        setUserName: (state, action) => {
            console.log("setUserName action called", action.payload);
            state.userName = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.error("Failed to fetch products:", action.error);
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log("post action",action);
                
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                console.error("Failed to fetch posts:", action.error);
            })
        // Add your extra reducers here
    }
})

export const { increment, decrement, setUserName, addProduct } = counterSlice.actions;



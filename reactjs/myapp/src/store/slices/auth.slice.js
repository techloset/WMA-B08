import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase.config";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

export const signup = createAsyncThunk(
    "auth/signup",
    async (userData, { rejectWithValue }) => {
        try {
            console.log("userDat in action", userData);
            
            const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            await setDoc(doc(collection( db,"users"), response.user.uid), {
                fullName: userData.userName,
                email: userData.email,
                userId: response.user.uid,
                createdAt: new Date(),
            });
            const user = response.user;
            return user;
        } catch (error) {
            console.log("error in signup action", error);
            return rejectWithValue(error.message);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await signInWithEmailAndPassword(auth, userData.email, userData.password)
            const user = response.user;
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const fetchCurrentUser = ()=> (dispatch)=>{
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth,async(user) => {
        if (user) {

            const docSnap = await getDoc(doc(db, "users", user.uid));
            if (!docSnap.exists()) {
                console.log("No such document!");
                return;
            }
            dispatch(setUser({
                ...docSnap.data(),
            }));
        } else {
            console.log("User is signed out", user);
            dispatch(logout());
        }
    });
    return unsubscribe;

}

export const doLogout = createAsyncThunk(
    "auth/logout",
    async (userData, { rejectWithValue }) => {
        try {
            await auth.signOut();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: true,
        isLoading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
    },
   extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setUser, logout, setLoading } = authSlice.actions;
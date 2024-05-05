import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usergoogle = JSON.parse(localStorage.getItem("googleuser"));

const googleSlice = createSlice({
    name: "google",
    initialState: {
        user: [],
        googleuser: usergoogle ? usergoogle : null,
        isSuccess: false,
        isLoading: false,
        isError: false,
        message: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.user = null
                state.isSuccess = false
                state.isLoading = true
                state.isError = false
                state.message = ""
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isSuccess = true
                state.isLoading = false
                state.isError = false
                state.message = ""
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.user = null
                state.isSuccess = false
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logOutGoogleUser.fulfilled, (state) => {
                state.googleuser = null;
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = "";
            });
    },
})

export default googleSlice.reducer;

export const fetchUser = createAsyncThunk("USER/GOOGLE", async () => {
    const response = await axios.get("http://localhost:8080/login/success", { withCredentials: true })
    return response.data;
})

export const logOutGoogleUser = createAsyncThunk(
    "LOGOUT/GOOGLE/USER",
    async () => {
        localStorage.removeItem("googleuser");
    }
);
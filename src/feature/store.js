import { configureStore } from "@reduxjs/toolkit";
import googleAuth from './google/googleSlice';

const store = configureStore({
    reducer: {
        google: googleAuth
    }
})

export default store;
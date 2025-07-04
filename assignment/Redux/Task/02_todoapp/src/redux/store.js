import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoslice'

const store = configureStore({
    reducer:{
     todo: todoReducer
    },
});

export default store;
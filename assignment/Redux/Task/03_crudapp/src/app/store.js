import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../feature/user/userslice";

const store = configureStore({
    reducer: {
        users: useReducer,
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Feature/Auth/AuthSlice";
import cartSlice from "../Feature/Product/Cart"





export default configureStore({
    reducer:{
        AuthSlice,
        cartSlice
    }
})
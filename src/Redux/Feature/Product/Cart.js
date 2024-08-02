import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));
export const fetchCart = createAsyncThunk("fetchCart", () => {
 return axios({
    method: "get",
    url: `http://localhost:9999/cart/getAll`,
    headers: {
      Authorization: `Break ${token}`,
      "Content-Type": "application/json",
    },
  })?.then((res) => {
    return res?.data;
    // dispatch(add(res?.data?.data));
    // setCart(res?.data?.data);
  });
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartId: "", pending: false, error: "",refresh:true },
  reducers: {
    refetch:(state)=>{
      console.log("----->")
      state.refresh = !state.refresh
    },
    setCart: (state) => {
      state.cart = [];
      state.cartId = "";
    },
    addCart:(state,{payload})=>{
      state.cart = payload.data;
        state.cartId = payload.cartId;

         // if (!state.cart.some(item => item.id === payload.id)) {
      //   state.cart.push(payload);
    }
    // plusCart:(state,{payload})=>{
      
    // }
  },

  extraReducers: (builder) => {
    builder
      ?.addCase(fetchCart.pending, (state, action) => {
        state.pending = true;
      })
      ?.addCase(fetchCart.fulfilled, (state,{ payload}) => {
        state.pending = false;
        state.cart = payload.data;
        state.cartId = payload.cartId;
      })
      ?.addCase(fetchCart.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default cartSlice.reducer;
export const {refetch,addCart,setCart} = cartSlice.actions;

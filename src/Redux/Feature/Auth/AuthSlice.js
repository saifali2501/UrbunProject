import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("userLogin") || "{}");
const jsonToken = localStorage.getItem("token");
const token = jsonToken ? JSON.parse(jsonToken) : "";
const AuthSlice = createSlice({
    name: "auth",
    initialState: { user, token },
    reducers: { 
        login: (state, { payload }) => {
            state.user = payload.data;
            state.token = payload.token;
            localStorage.setItem("userLogin", JSON.stringify(payload.data));
            localStorage.setItem("token", JSON.stringify(payload.token));
        },
       logOut:(state,action)=>{
        state.user = {}
        state.token = ""
        localStorage.clear()
       },
    }
});

export default AuthSlice.reducer;
export const { login,logOut } = AuthSlice.actions;

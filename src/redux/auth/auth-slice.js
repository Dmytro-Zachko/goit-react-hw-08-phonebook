import { createSlice } from "@reduxjs/toolkit";
import { register,logIn,logOut,fetchCurrentUser } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:  {
      // register
      [register.fulfilled] (state, action)  {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      // login
      [logIn.fulfilled] (state, action)  {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      // logout
      [logOut.fulfilled] (state)  {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      // refresh
       [fetchCurrentUser.pending](state) {
        state.isRefreshing = true
      },
      [fetchCurrentUser.fulfilled](state, action) {
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false
      },
 [fetchCurrentUser.rejected](state)  {
        state.isRefreshing = false
      }
        }
})

export const authReducer = authSlice.reducer;
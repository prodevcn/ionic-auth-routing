import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
    userToken: (state, action) => {
      state.token = action.payload.token
    }
  }
})

export const { login, logout, userToken } = userSlice.actions
export const selectUser = (state: any) => state.user.user
export const selectToken = (state: any) => state.user.token
export default userSlice.reducer
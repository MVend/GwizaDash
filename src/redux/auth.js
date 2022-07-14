import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import AuthToken from '../utils/AuthToken';

const initialState = {
  isLoading: false,
  data: {},
  error: ''
}

export const authenticateUser = createAsyncThunk('auth/login', async({values}) => {
  try{
    console.log(values)
      const response = await Axios.post(`${import.meta.env.VITE_GWIZAMS_URL}/web/auth/signin`,{
        username: values?.username,
        password: values?.password
      })
      return response?.data
  }catch(err){
    return err?.response?.data
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authenticateUser.pending]: (state) => {
      state.isLoading = true
    },
    [authenticateUser.fulfilled]: (state, action ) => {
      const {payload} = action
      state.isLoading =  false
      if(payload?.resp_code == 100) {
        AuthToken.setToken(payload?.token)
        state.data = payload
        state.error = ''
      }else{
        state.data = {}
        state.error = payload?.resp_msg
      }
    },
    [authenticateUser.rejected]: (state, {error}) => {
      state.isLoading =  false
      state.error = error?.message
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer
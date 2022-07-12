import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'

export default configureStore({
  reducer: {
    conter: counterReducer
  },
})
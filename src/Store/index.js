import { configureStore } from '@reduxjs/toolkit'
import  dropdownSlice from './dropdown-slice'


const store = configureStore({reducer: {dropdown: dropdownSlice.reducer}});

export default store;
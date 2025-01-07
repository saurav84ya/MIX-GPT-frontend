
import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import promptSlice from './promptSlice'


const store = configureStore({
    reducer : {
        authSlice : authSlice,
        promptSlice : promptSlice
    }
})

export default store;
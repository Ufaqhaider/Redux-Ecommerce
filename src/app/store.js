import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from '../features/slices/sliderSlice';
import productSlice from '../features/slices/productSlice';
import cartSlice from '../features/slices/cartSlice';
import authSlice  from '../features/slices/authSlice';

export const store = configureStore({
    reducer:{
        Slider : sliderSlice,
        products: productSlice,
        cart : cartSlice,
        user : authSlice
    }
})
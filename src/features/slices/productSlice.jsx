import {createSlice} from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productSlice = createSlice({
    
    name:'ProductSlice',
    initialState:{
        filteredProducts: JSON.parse(localStorage.getItem('filterData')) || storeData,
        singleProducts: JSON.parse(localStorage.getItem('singleProduct')) || storeData,

    },
    reducers:{
        filterProducts (state,action){
            try{
                const filter = storeData.filter((product)=>product.type=== action.payload);
                state.filteredProducts = filter;

                const saveState = JSON.stringify(filter);
                localStorage.setItem('filterData', saveState)
            }catch(err){
                return err
            }

        },
        singleProduct (state,action){
            try{
                const filter = storeData.filter((product)=>product.id=== action.payload);
                state.singleProducts = filter;

                const saveState = JSON.stringify(filter);
                localStorage.setItem('singleProduct', saveState)
            }catch(err){
                return err
            }

        }

    }

})




export const {filterProducts, singleProduct} = productSlice.actions;

export default productSlice.reducer
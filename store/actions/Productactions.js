import {ActionTypes} from '../constants/action-types'
import axios from 'axios'
import fakeStore from '../../pages/api/fakeStore'

export const fetchProducts = () =>

 async (dispatch)=>{
    const response = await fakeStore.get("/products");
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
    console.log(response.data);
}

    




export const setProducts = (products) =>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct = (product) =>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
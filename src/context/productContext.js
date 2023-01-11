import {createContext , useContext , useEffect, useReducer} from 'react';
import axios from 'axios';
import productReducer from '../reducer/productReducer';
// Context Created for creating a global Storage 
const AppContext = createContext();


// Api Url 
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false ,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading : false,
    singleProduct : {}
}
// Context Provider Created for send the data to components
const AppProvider = ({children})=>{

    const [state , dispatch] = useReducer(productReducer , initialState)
const getProducts = async (url)=>{
    try{
        dispatch({type : 'SET_LOADING'})
        const res =  await axios.get(url);
        const products = await res.data;
        console.log(products);
        dispatch({type : 'MY_PRODUCTS' , payload : products})
    }catch(err){
     dispatch({type : 'API_ERROR'})
    }
}

const getSingleProduct = async (url)=>{
    dispatch({type : 'SET_SINGLE_LOADING'})
    try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type : 'GET_SINGLE_PROCUST' , payload : singleProduct})
    }catch(err){
            dispatch({type : 'SET_SINGLE_ERROR'})
    }
}


useEffect(()=>{
    getProducts(API);
},[])

    return <AppContext.Provider value={{...state , getSingleProduct}} >
        {children}
    </AppContext.Provider>

}
// Custom Hook Created for Products
const useProductContext = ()=>{
    return useContext(AppContext)
}
export {AppProvider , AppContext , useProductContext };
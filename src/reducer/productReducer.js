const productReducer = (state , action)=>{
    switch (action.type) {
        case 'SET_LOADING':
            return{
                ...state,
                isLoading : true
            }
            case 'API_ERROR':
                return {
                    ...state,
                    isLoading : false , 
                    isError : true
                }
            case 'MY_PRODUCTS':
                const featureData = action.payload.filter((val)=>{
                    return val.featured === true
                })
                return{
                    ...state,
                    isLoading : false ,
                    isError : false ,
                    products : action.payload,
                    featureProducts : featureData
                }
                case 'SET_SINGLE_LOADING':
                    return{
                        ...state,
                        isSingleLoading : true
                    }
                case 'GET_SINGLE_PROCUST':
                    return {
                        ...state,
                        isSingleLoading : false,
                        singleProduct : action.payload
                    }
                case 'SET_SINGLE_ERROR':
                    return{
                        ...state,
                        isSingleLoading : false,
                        isError : true
                    }
        default:
            return state ; 
    }
}

export default productReducer;
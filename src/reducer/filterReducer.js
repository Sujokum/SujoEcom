const filterReducer = (state , action)=>{
    switch (action.type ) {
        case 'LOAD_FILTER':
            return {
                ...state,
                filter_products : [...action.payload],
                all_products : [...action.payload]
            };
        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view : true
            };
        case 'SET_LIST_VIEW':
                return {
                    ...state,
                    grid_view : false
                };
        case 'GET_SORT_VALUE':
            return {
                ...state,
                sorting_value: action.payload,
            };
        default :
       return state
    }
}

export default filterReducer;



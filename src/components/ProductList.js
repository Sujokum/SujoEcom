import React from 'react'
import {useFilterContext} from '../context/filter_context';

const ProductList = () => {
  const { filter_products , setGridView} = useFilterContext()
  
  if(setGridView === true ){
    return <GridView products = {filter_products} />
  }

}

export default ProductList
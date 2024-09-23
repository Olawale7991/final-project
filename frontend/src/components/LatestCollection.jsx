import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const  { products } = useContext(ShopContext);    
    
    const [ lastestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    }, [])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1 ={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm: md:text-base text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo ea veli Sint fuga facilis alias quo totam laborum dolores.
          </p>
      </div>

    {/* Rendering Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
      lastestProducts.map((item, index) => (
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
      ))
      }
    </div>
    </div>
  )
}

export default LatestCollection
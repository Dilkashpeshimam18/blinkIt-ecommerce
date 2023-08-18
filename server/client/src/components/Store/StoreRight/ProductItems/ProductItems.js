import React, { useState, useEffect, useContext } from 'react'
import './ProductItems.css'
import Product from '../Product/Product'


const ProductItems = ({ products }) => {

    return (
        <div className='productItems'>
            {products.map((item, index) => {
                return (
                    <Product key={index} productId={item.productId} title={item.title} price={item.price} img={item.imageUrl} quantity={item.quantity} category={item.category} subImg={item.subImg} />
                )
            })}
        </div>
    )
}

export default ProductItems
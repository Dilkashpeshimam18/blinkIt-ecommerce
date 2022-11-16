import React, { useState, useEffect } from 'react'
import './ProductItems.css'
import { Data } from '../../Data/Data'
import Product from '../Product/Product'

const ProductItems = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        let data = Data
        setData(data)
    }, [Data])
    return (
        <div className='productItems'>
            {data.map((item, index) => {
                return (
                    <Product key={index} title={item.title} price={item.price} img={item.imageUrl} />
                )
            })}
        </div>
    )
}

export default ProductItems
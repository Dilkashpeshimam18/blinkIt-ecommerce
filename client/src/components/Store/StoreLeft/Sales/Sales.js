import React from 'react'
import './Sales.css'
import { SalesData } from '../../../Data/SalesData'
import { Link } from 'react-router-dom'
const Sales = () => {
    return (
        <div className='sales'>
            <h3>Sales</h3>
            {SalesData.map((item) => {
                return (
                    <div style={{ cursor: 'pointer' }} className='sales__container'>
                        <img className='sales__img' src={item.imageUrl} />
                        <div className='sales__body'>
                            <Link style={{ textDecoration: 'none' }} to={'/product-detail/' + item.productId}>  <span className='sales__title'>{item.title}</span></Link>
                            <span className='sales__price'>Rs <del>{item.oldPrice}</del> {item.price}</span>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default Sales
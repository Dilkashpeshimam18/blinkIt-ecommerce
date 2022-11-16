import React from 'react'
import './Product.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Product = ({ title, price, img }) => {
    return (
        <div className='product'>
            <img className='product__img' src={img} />
            <div className='product__container'>
                <div className='product__body'>

                    <span style={{ marginTop: '10px' }} className='sales__title'>{title}</span>
                    <span className='sales__desc'>Boombox Cartel</span>
                    <span style={{ paddingTop: "5px" }} className='sales__price'>${price}</span>
                </div>
                <ShoppingCartOutlinedIcon style={{ color: '#333', cursor: 'pointer', marginTop: '10px', fontSize: '30px' }} />

            </div>

        </div>
    )
}

export default Product
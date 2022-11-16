import React, { useContext } from 'react'
import './Product.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContext from '../../../../store/cartContext';

const Product = ({ id, title, price, img, quantity }) => {
    const { addProduct } = useContext(CartContext)
    return (
        <div className='product'>
            <img className='product__img' src={img} />
            <div className='product__container'>
                <div className='product__body'>

                    <span style={{ marginTop: '10px' }} className='sales__title'>{title}</span>
                    <span style={{ paddingTop: "5px" }} className='sales__price'>${price}</span>
                </div>
                <div onClick={() => {
                    addProduct({
                        id: id,
                        title: title,
                        price: price,
                        img: img,
                        quantity: quantity
                    })
                }}>
                    <ShoppingCartOutlinedIcon style={{ color: '#333', cursor: 'pointer', marginTop: '10px', fontSize: '30px' }} />

                </div>

            </div>

        </div>
    )
}

export default Product
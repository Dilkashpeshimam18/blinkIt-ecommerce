import React, { useContext, useEffect } from 'react'
import './CartContent.css'
import Divider from '@mui/material/Divider';
import CloseIcon from '../../assets/close.png'
import CartContext from '../../../store/cartContext';
import ProductQuantity from '../../ProductQuantity/ProductQuantity';

const CartContent = ({ id, title, price, img, quantity }) => {
    const { removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

    return (
        <div className='cart'>
            <div className='cart__body'>
                <div className='cart__body__sub'>
                    <img className='cart__body__img' src={img} />
                    <div className='cart__body__content'>
                        <span className='card__body__name'>{title}</span>
                        <span className='card__body__price'>Rs:{price}</span>

                    </div>

                    <ProductQuantity quantity={quantity} id={id} />
                    <div className='cart__body__total'>
                        <span className='cart__body__totalPrice'>Rs:{price}</span>
                    </div>
                    <div onClick={() => removeProduct(id)} className='cart__body__remove'>
                        <img style={{ height: "10px", width: '10px' }} src={CloseIcon} />
                    </div>

                </div>

                <Divider />
            </div>

        </div>
    )
}

export default CartContent
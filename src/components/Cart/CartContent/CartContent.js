import React, { useContext, useEffect } from 'react'
import './CartContent.css'
import Divider from '@mui/material/Divider';
import CloseIcon from '../../assets/close.png'
import CartContext from '../../../store/cartContext';

const CartContent = ({ id, title, price, img, quantity }) => {
    const { removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)
    useEffect(() => {
        console.log(id)
    }, [])
    return (
        <div className='cart'>
            <div className='cart__body'>
                <div className='cart__body__sub'>
                    <img className='cart__body__img' src={img} />
                    <div className='cart__body__content'>
                        <span className='card__body__name'>{title}</span>
                        <span>$:{price}</span>

                    </div>

                    <div className='cart__quantityContainer'>
                        <span className='cart__body__quantityTitle' >Quantity</span>
                        {/* <span className='cart__body__quantityTotal'>{quantity}</span> */}
                        <div className='cart__body__quantity'>
                            <div onClick={() => decrementQuantity(id)} className='quantity__subtract'>
                                <span style={{ marginLeft: '12px' }}>-</span>
                            </div>
                            <div className='quantity'>
                                {quantity}
                            </div>

                            <div onClick={() => incrementQuantity(id)} className='quantity__add'>
                                <span style={{ marginLeft: '9px' }}> +</span>
                            </div>
                        </div>
                    </div>

                    <div className='cart__body__total'>
                        <span className='cart__body__totalPrice'>$:{price}</span>
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
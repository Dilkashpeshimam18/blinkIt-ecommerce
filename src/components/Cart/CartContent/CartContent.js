import React from 'react'
import './CartContent.css'
import Divider from '@mui/material/Divider';


const CartContent = ({ title, price, img }) => {
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
                            <div className='quantity__subtract'>
                                <span style={{ marginLeft: '12px' }}>-</span>
                            </div>
                            <div className='quantity'>
                                1
                            </div>

                            <div className='quantity__add'>
                                <span style={{ marginLeft: '9px' }}> +</span>
                            </div>
                        </div>
                    </div>

                    <div className='cart__body__total'>
                        <span className='cart__body__totalPrice'>$:{price}</span>
                        <span className='cart__body__totalRemove'>Remove</span>
                    </div>

                </div>

                <Divider />
            </div>

        </div>
    )
}

export default CartContent
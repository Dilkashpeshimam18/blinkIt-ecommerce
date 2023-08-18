import React, { useContext } from 'react'
import CartContext from '../../store/cartContext'
import './ProductQuantity.css'

const ProductQuantity = ({ quantity, id }) => {

    const { incrementQuantity, decrementQuantity } = useContext(CartContext)

    return (

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
    )
}

export default ProductQuantity
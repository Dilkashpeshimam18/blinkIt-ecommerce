import React, { useState, useEffect } from 'react'
import './CartMain.css'
import { Data } from '../../Data/Data'
import CartContent from '../CartContent/CartContent'
const Cart = ({ setIsPane }) => {
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        let data = Data
        setCartData(data)
    }, [])
    const closeCart = () => {
        setIsPane(false)

    }
    return (
        <div className='cart__container'>
            <div className='cart__header'>

                <h3 className='cart__title'>Your Cart</h3>
                <p className='cart__remove'>Remove all</p>


            </div>
            <div className='cart__main'>
                {cartData.map((data, index) => {
                    return (
                        <CartContent key={index} title={data.title} price={data.price} img={data.imageUrl} />
                    )
                })}

            </div>

            <div className='cart__total'>
                <h3 className='cart__total__title'>Total</h3>
                <h2>$ 0</h2>
            </div>
            <div className='cart__buttons'>

                <button onClick={closeCart} className='cart__cancel'>Cancel</button>
                <button className='cart__button'>Order</button>



            </div>
        </div>
    )
}

export default Cart
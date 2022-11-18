import React, { useState, useEffect, useContext } from 'react'
import './CartMain.css'
import { Data } from '../../Data/Data'
import CartContent from '../CartContent/CartContent'
import CartContext from '../../../store/cartContext'

const Cart = ({ setIsPane }) => {
    const [cartData, setCartData] = useState([])
    const { products } = useContext(CartContext)

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
                <p className='cart__remove'>Clear all</p>


            </div>
            <div className='cart__main'>
                {products.map((data, index) => {
                    return (
                        <CartContent key={index} title={data.title} price={data.price} img={data.img} quantity={data.quantity} />
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
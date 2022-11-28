import React, { useState, useEffect, useContext } from 'react'
import './CartMain.css'
import { Data } from '../../Data/Data'
import CartContent from '../CartContent/CartContent'
import CartContext from '../../../store/cartContext'
import axios from 'axios'
import EmptyCart from '../../assets/emptycart.png'
const Cart = ({ setIsPane }) => {
    const [cartData, setCartData] = useState([])
    const { products, removeAll, total, } = useContext(CartContext)


    useEffect(() => {
    }, [])

    const closeCart = () => {
        setIsPane(false)

    }
    return (
        <div className='cart__container'>
            <div className='cart__header'>
                {products.length == 0 ? <h3 className='cart__title'>Your Cart is currently empty!</h3> :
                    <h3 className='cart__title'>Your Cart</h3>

                }
                {products.length != 0 && <p onClick={removeAll} className='cart__remove'>Clear all</p>
                }


            </div>
            {products.length == 0 && <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', paddingTop: '80px' }}>
                <img style={{ width: '380px', height: '380px' }} src={EmptyCart} /></div>}
            <div className='cart__main'>
                {products?.map((data, index) => {
                    return (
                        <CartContent key={index} id={data.id} title={data.title} price={data.price} img={data.img} quantity={data.quantity} />
                    )
                })}

            </div>
            {products.length != 0 &&
                <div className='cart__total'>
                    <h3 className='cart__total__title'>Total</h3>
                    <h2>Rs {total}</h2>
                </div>
            }

            <div className='cart__buttons'>
                {products.length != 0 && <>
                    <button onClick={closeCart} className='cart__cancel'>Cancel</button>

                    <button type='submit' className='cart__button'>Order</button>
                </>}





            </div>
        </div>
    )
}

export default Cart
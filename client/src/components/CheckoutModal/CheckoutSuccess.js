import React,{useContext, useEffect} from 'react';
import Verify from '.././assets/verified.gif'
import CartContext from '../../store/cartContext';
import './Checkout.css'

const CheckoutSuccess = () => {
const {removeAll}=useContext(CartContext)

useEffect(()=>{
  removeAll()
},[])
    return (
        <div className='checkout'>

            <div>
                <img src={Verify} style={{ height: '250px', width: '250px' }} />

            </div>

            <h3>Congrats! Your order is successful</h3>

        </div>
    )
}

export default CheckoutSuccess 
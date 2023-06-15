import React from 'react'
import Error from '.././assets/error.gif'
import './Checkout.css'

const CheckoutFailed = () => {

    return (
        <div className='checkout' >

            <div>
                <img src={Error} style={{ height: '250px', width: '250px' }} />

            </div>

            <h3>Order Unsuccessful!</h3>

        </div>
    )
}

export default CheckoutFailed
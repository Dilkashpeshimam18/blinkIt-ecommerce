import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './Payment'

const PUBLIC_KEY = 'pk_test_51InLW4SFCCEicE5h6JWGTfSgHGP2crYUbk2EHRHJAYrFf894hKDbMSKb6k2X1OqOz4wBvFowPKErZpL4WocfHDAF00unF1e0pB'

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <Payment />

        </Elements>
    )
}

export default StripeContainer
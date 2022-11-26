import React, { useContext, useEffect, useState, Suspense } from 'react'
import CartContext from '../../store/cartContext'
import SubSection from '../SubSection/SubSection'
import './Store.css'
import StoreLeft from './StoreLeft/StoreLeft'
import StoreRight from './StoreRight/StoreRight'
import { useNavigate } from 'react-router-dom'

const Store = ({ setIsPane }) => {
    const [section, setSection] = useState('Store')
    const { isLoggedIn, getUserCart, products } = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (isLoggedIn == false) {
            navigate('/login')
        }
        getUserCart()
    }, [])
    return (

        <div className='store'>
            <SubSection section={section} />
            <div className='store__Container'>
                <StoreLeft />
                <StoreRight />

            </div>
        </div>
    )
}

export default Store
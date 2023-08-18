import React, { useContext, useEffect, useState, Suspense } from 'react'
import CartContext from '../../store/cartContext'
import SubSection from '../SubSection/SubSection'
import './Store.css'
import StoreLeft from './StoreLeft/StoreLeft'
import StoreRight from './StoreRight/StoreRight'
import { useNavigate } from 'react-router-dom'
import Logout from '../Logout/Logout'

const Store = ({ setIsPane }) => {
    const [section, setSection] = useState('Store')
    const { isLoggedIn, getUserCart, products, showLogout, setShowLogout } = useContext(CartContext)
    const navigate = useNavigate()
    const handleClose = () => {
        setShowLogout(false)
    }
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
            {showLogout == true && <Logout handleClose={handleClose} />}
        </div>
    )
}

export default Store
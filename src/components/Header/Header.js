import React, { useContext, useEffect } from 'react'
import './Header.css'
import BlackpinkLogo from '../assets/blackpinklogo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CartContext from '../../store/cartContext';
import { NavLink } from 'react-router-dom'

const Header = ({ setIsPane }) => {
    const { products, numberOfProduct, setNumberOfProduct, addProduct } = useContext(CartContext)

    const quantity = products?.reduce((currNum, product) => {
        return currNum + product.quantity
    }, 0)
    useEffect(() => {
        setNumberOfProduct(quantity)

    }, [addProduct, products])
    return (
        <div className='header'>
            <div className='header__Container'>
                <div className='header__Left'>
                    <div className='header__Icon'>
                        <h4>BLINK FOREVER</h4>
                    </div>

                </div>
                <div className='hedaer__Right'>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='header__Links'>
                        <div className='header__singleLink'>
                            <NavLink style={{ textDecoration: 'none' }} to='/'><p>HOME</p></NavLink>
                        </div>
                        <div className='header__singleLink'>
                            <NavLink style={{ textDecoration: 'none' }} to='/store'><p>STORE</p></NavLink>
                        </div>
                        <div className='header__singleLink'>
                            <NavLink style={{ textDecoration: 'none' }} to='/about'><p style={{ fontFamily: "Montserrat" }}>ABOUT US</p></NavLink>
                        </div>
                        <div className='header__singleLink'>
                            <NavLink style={{ textDecoration: 'none' }} to='/contact'><p style={{ fontFamily: "Montserrat" }}>CONTACT US</p></NavLink>
                        </div>
                        <div className='header__icons'>
                            <div className='header__singleIcon'>
                                <SearchOutlinedIcon />

                            </div>
                            <div onClick={() => setIsPane(true)} style={{ marginRight: '18px' }} className='header__singleIcon'>

                                <span style={{ marginTop: '5px' }}>    <LocalMallOutlinedIcon /> </span>
                                <span style={{ fontSize: '18px', marginLeft: '10px' }}>{numberOfProduct}</span>

                            </div>
                            <div className='header__singleIcon'>
                                <NavLink to='/login'><PersonOutlinedIcon /></NavLink>

                            </div>

                        </div>


                    </div>

                </div>



            </div>
        </div>
    )
}

export default Header
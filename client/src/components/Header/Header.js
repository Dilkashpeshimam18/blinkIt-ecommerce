import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import BlackpinkLogo from '../assets/blackpinklogo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CartContext from '../../store/cartContext';
import SearchBox from '../SearchBox/SearchBox';
import { NavLink } from 'react-router-dom'
import BlinkItLogo from '.././assets/Blink-It-logo.png'

const Header = ({ setIsPane }) => {
    const [showSearch, setShowSearch] = useState(false)
    const { products, numberOfProduct, setNumberOfProduct, addProduct } = useContext(CartContext)

    const quantity = products?.reduce((currNum, product) => {
        return currNum + product.quantity
    }, 0)
    const handleClickOpen = () => {
        setShowSearch(true);
    };

    const handleClose = () => {
        setShowSearch(false);
    };
    useEffect(() => {
        setNumberOfProduct(quantity)

    }, [addProduct, products])
    return (
        <div className='header'>
            <div className='header__Container'>
                <div className='header__Left'>
                    <div className='header__Icon'>
                    <img src={BlinkItLogo} style={{ height: '160px', width: '160px' }} />
                    </div>

                </div>
                <div className='hedaer__Right'>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='header__Links'>
                        <div className='header__singleLink'>
                            <NavLink className='header_navLink'  to='/'><p className='header__singleLinkText'>HOME</p></NavLink>
                        </div>
                        <div className='header__singleLink'>
                            <NavLink className='header_navLink'  to='/store'><p className='header__singleLinkText'>STORE</p></NavLink>
                        </div>
                        {/* <div className='header__singleLink'>
                            <NavLink className='header_navLink'  to='/about'><p className='header__singleLinkText'>ABOUT US</p></NavLink>
                        </div> */}
                        <div className='header__singleLink'>
                            <NavLink className='header_navLink'  to='/contact'><p className='header__singleLinkText'>CONTACT </p></NavLink>
                        </div>
                        <div className='header__icons'>
                            <div style={{ cursor: 'pointer' }} onClick={handleClickOpen} className='header__singleIcon'>
                                <SearchOutlinedIcon sx={{color:'gray'}} className='header__icons' />

                            </div>
                            <div onClick={() => setIsPane(true)} style={{ marginRight: '18px' }} className='header__singleIcon'>

                                <span style={{ marginTop: '5px' }}>    <LocalMallOutlinedIcon className='header__icons' /> </span>
                                <span style={{ fontSize: '15px', marginLeft: '10px', paddingTop: '7px', }}>{numberOfProduct}</span>

                            </div>
                            <div className='header__singleIcon'>
                                <NavLink to='/login'><PersonOutlinedIcon sx={{color:'gray'}} className='header__icons' /></NavLink>

                            </div>

                        </div>


                    </div>

                </div>



            </div>
            {showSearch && <SearchBox showSearch={showSearch} handleClose={handleClose} />}

        </div>
    )
}

export default Header
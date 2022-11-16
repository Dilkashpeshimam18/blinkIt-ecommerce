import React from 'react'
import './Header.css'
import BlackpinkLogo from '../assets/blackpinklogo.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = ({ setIsPane }) => {
    return (
        <div className='header'>
            <div className='header__Container'>
                <div className='header__Left'>
                    <div className='header__Icon'>
                        <h4>BLACKPINK</h4>
                    </div>

                </div>
                <div className='hedaer__Right'>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='header__Links'>
                        <div className='header__singleLink'>
                            <p>HOME</p>
                        </div>
                        <div className='header__singleLink'>
                            <p>STORE</p>
                        </div>
                        <div className='header__singleLink'>
                            <p style={{ fontFamily: "Montserrat" }}>ABOUT</p>
                        </div>
                        <div className='header__icons'>
                            <div className='header__singleIcon'>
                                <SearchOutlinedIcon />

                            </div>
                            <div onClick={() => setIsPane(true)} style={{ marginRight: '18px' }} className='header__singleIcon'>

                                <span style={{ marginTop: '5px' }}>    <LocalMallOutlinedIcon /> </span>
                                <span style={{ fontSize: '18px', marginLeft: '10px' }}>0</span>

                            </div>
                            <div className='header__singleIcon'>
                                <PersonOutlinedIcon />

                            </div>

                        </div>


                    </div>

                </div>



            </div>
        </div>
    )
}

export default Header
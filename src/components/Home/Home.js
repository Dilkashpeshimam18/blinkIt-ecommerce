import React from 'react'
import './Home.css'
import BpIcon from '../assets/bpIcon.png'
import ProductItems from '../Store/StoreRight/ProductItems/ProductItems'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__container1' >
                    <h1 className='home__title'>
                        BUY LATEST BLACKPINK CLOTHING & ACCESSORIES
                    </h1>
                    <Link to='/store'><button className='home__btn'>BUY NOW</button></Link>
                </div>
                <div className='home__container2'>
                    <img style={{ width: '450px', height: '400px' }} src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_ICDyeTF.png?v=1598016592' />

                </div>


            </div>
            <div className='home__container2'>
                <ProductItems />

            </div>
            <div className='home__btnContainer'>
                <Link to='/store'><button className='home__btn2'>VIEW ALL PRODUCTS</button></Link>
            </div>
        </div>
    )
}

export default Home
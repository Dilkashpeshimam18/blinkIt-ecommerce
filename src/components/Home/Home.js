import React from 'react'
import './Home.css'
import HoodiesPng from '../assets/hoodie.png'
import ProductItems from '../Store/StoreRight/ProductItems/ProductItems'
const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__container1' >
                    <h2>
                        NEW HOODIES COLLECTION
                    </h2>
                    <button className='home__btn'>BUY NOW</button>
                </div>
                <div className='home__container2'>
                    <img style={{ width: '400px', height: '500px' }} src={HoodiesPng} />
                </div>

            </div>
            <ProductItems />
        </div>
    )
}

export default Home
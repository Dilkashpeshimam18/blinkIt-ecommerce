import React, { useContext, useEffect } from 'react'
import './Home.css'
import ProductItems from '../Store/StoreRight/ProductItems/ProductItems'
import { Link } from 'react-router-dom'
import CartContext from '../../store/cartContext'
import { Data } from '../Data/Data'
import Carousel from 'react-elastic-carousel'

const Home = () => {
    const { homeData, setHomeData } = useContext(CartContext)
    useEffect(() => {
        let data = Data.filter((data) => {
            return data.category == 'T-Shirt'
        })
        setHomeData(data)


    }, [])
    return (
        <div className='home'>
            <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={1800}>
                <div className='home__container'>
                    <div className='home__container1' >
                        <h1 className='home__title'>
                            BUY LATEST BLACKPINK CLOTHING & ACCESSORIES
                        </h1>
                        <Link to='/store'><button className='home__btn'>BUY NOW</button></Link>
                    </div>
                    <div className='home__imgContainer2'>
                        <img className='home__image' style={{ width: '450px', height: '400px' }} src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_ICDyeTF.png?v=1598016592' />

                    </div>


                </div>
                <div className='home__container'>
                    <div className='home__container1' >
                        <h1 className='home__title'>
                            GET BORN PINK TOUR T-SHIRT & ACCESSORIES
                        </h1>
                        <Link to='/store'><button className='home__btn'>BUY NOW</button></Link>
                    </div>
                    <div className='home__imgContainer2'>
                        <img className='home__image' style={{ width: '500px', height: '500px' }} src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BP_BLACKTEE_BACK.png?v=1681414250' />

                    </div>


                </div>
                <div className='home__container'>
                    <div className='home__container1' >
                        <h1 className='home__title'>
                            BUY ICE CREAM T-SHIRT & ACCESSORIES
                        </h1>
                        <Link to='/store'><button className='home__btn'>BUY NOW</button></Link>
                    </div>
                    <div className='home__imgContainer2'>
                        <img className='home__image' style={{ width: '400px', height: '400px' }} src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_DyeF_faec3f21-5d3a-46e7-8beb-c863ba115477.png?v=1598016743' />

                    </div>


                </div>
            </Carousel>

            <div className='home__container2'>
                <ProductItems products={homeData} />

            </div>
            <div className='home__btnContainer'>
                <Link to='/store'><button className='home__btn2'>VIEW ALL PRODUCTS</button></Link>
            </div>
        </div>
    )
}

export default Home
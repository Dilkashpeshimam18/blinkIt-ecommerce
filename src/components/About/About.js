import React, { useState } from 'react'
import SubSection from '../SubSection/SubSection'
import './About.css'
import Avatar from '@mui/material/Avatar';

const About = () => {
    const [section, setSection] = useState('About')

    return (
        <div className='about'>
            <SubSection section={section} />

            <div className='about__container'>
                <div className='about__imgContainer'>
                    <Avatar style={{ width: '300px', height: '300px' }} src='https://render.fineartamerica.com/images/rendered/square-product/small/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/3/5-blackpink-lala-lazodi-transparent.png?&targetx=139&targety=120&imagewidth=510&imageheight=548&modelwidth=788&modelheight=788&backgroundcolor=000000&orientation=0' />

                </div>
                <div className='about__contentContainer'>
                    <h2 style={{ fontWeight: 'bolder', fontStyle: 'italic', }}>BLINKS IT</h2>
                    <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                        BLINK IT is a onlline shopping store where you can buy blackpink latest merch & album at reasonable rate in India.
                        Choose latest T-shirts & accessories from wide choice of collection. Secure payment & shipping 4-5 business days. Made in India with love.
                    </p>
                    <p style={{ fontWeight: 'bold', fontStyle: 'italic', }}>Happy shopping!</p>

                </div>
            </div>

        </div>
    )
}

export default About
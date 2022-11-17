import React, { useState } from 'react'
import SubSection from '../SubSection/SubSection'
import './Store.css'
import StoreLeft from './StoreLeft/StoreLeft'
import StoreRight from './StoreRight/StoreRight'
const Store = ({ setIsPane }) => {
    const [section, setSection] = useState('Store')
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
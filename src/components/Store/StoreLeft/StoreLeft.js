import React from 'react'
import Categories from './Categories/Categories'
import Sales from './Sales/Sales'
import Search from './Search/Search'
import './StoreLeft.css'

const StoreLeft = () => {
    return (
        <div className='storeLeft'>
            <Search />
            <Sales />
            <Categories />
        </div>
    )
}

export default StoreLeft
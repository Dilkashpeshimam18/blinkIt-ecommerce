import React from 'react'
import './Categories.css'
const Categories = () => {
    return (
        <div className='categories'>
            <h3 className='categories__title'>Categories</h3>
            <ul className='product__categories'>
                <li className='cat__item'>Album</li>
                <li className='cat__item'>T-shirts</li>
                <li className='cat__item'>Accessories</li>

            </ul>

        </div>
    )
}

export default Categories
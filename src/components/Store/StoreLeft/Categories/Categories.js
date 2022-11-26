import React, { useContext } from 'react'
import CartContext from '../../../../store/cartContext'
import './Categories.css'
import { Data } from '../../../Data/Data'

const Categories = () => {
    const { data, setData } = useContext(CartContext)

    const handleAlbum = () => {
        let data = Data
        setData(data)
        const filter = data.filter((product) => {
            return product.category == 'Album'
        })
        setData(filter)
    }
    const handleAccessories = () => {
        let data = Data
        setData(data)

        const filter = data.filter((product) => {

            return product.category == 'Accessories'
        })
        setData(filter)
    }
    const handleTshirt = () => {
        let data = Data
        setData(data)

        const filter = data.filter((product) => {
            return product.category == 'T-Shirt'
        })
        setData(filter)
    }

    return (
        <div className='categories'>
            <h3 className='categories__title'>Categories</h3>
            <ul className='product__categories'>
                <li onClick={handleAlbum} className='cat__item'>Album</li>
                <li onClick={handleTshirt} className='cat__item'>T-shirts</li>
                <li onClick={handleAccessories} className='cat__item'>Accessories</li>

            </ul>

        </div>
    )
}

export default Categories
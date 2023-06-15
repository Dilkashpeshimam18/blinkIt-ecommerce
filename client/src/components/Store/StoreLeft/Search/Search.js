import React, { useState, useContext, useEffect } from 'react'
import CartContext from '../../../../store/cartContext'
import './Search.css'
import { Data } from '../../../Data/Data'
const Search = () => {
    const [searchProduct, setSearchProduct] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const { data, setData } = useContext(CartContext)
    useEffect(() => {
        setData(Data)

    }, [])
    const handleSearch = (e) => {

        setSearchProduct(e.target.value)
        const filterProduct = data.filter((product) => {
            return product.title.toLowerCase().includes(searchProduct.toLowerCase())
        })

        setData(filterProduct)
        if (searchProduct.length <= 1) {
            setData(Data)
        }

    }
    return (
        <div className='search'>
            <input onClick={() => setIsSearch(true)} value={searchProduct} onChange={handleSearch} className='searchInput' placeholder='Search Products...' />

        </div>
    )
}

export default Search
import React, { useState, useEffect, useContext } from 'react'
import ProductItems from './ProductItems/ProductItems'
import './StoreRight.css'
import CartContext from '../../../store/cartContext'
import Pagination from './Pagination/Pagination'
import { Data } from '../../Data/Data'

const StoreRight = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage, setProductPerPage] = useState(9)
    const { data, setData } = useContext(CartContext)
    useEffect(() => {
        let data = Data
        setData(data)
    }, [Data])

    const indexOfLastPost = currentPage * productPerPage
    const indexOfFirstPost = indexOfLastPost - productPerPage
    const currentProduct = data.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (number) => {
        setCurrentPage(number)
    }
    return (
        <div className='storeRight'>
            <ProductItems products={currentProduct} />
            <Pagination productPerPage={productPerPage} totalProduct={data.length} paginate={paginate} />

        </div>
    )
}

export default StoreRight
import React from 'react'
import './Pagination.css'
import NextArrow from '../../../assets/next.png'


const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i)
    }
    let lastIndex = pageNumbers[pageNumbers.length - 1]
    return (
        <div className='pagination'>
            <ul style={{ display: 'flex' }}>
                {pageNumbers.map((number) => (
                    <li className='pagination__Number' onClick={() => paginate(number)} key={number}><a href='!#'></a>{number}</li>
                ))}
            </ul>


        </div>
    )
}

export default Pagination
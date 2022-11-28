import React from 'react'

const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {pageNumbers.map((number) => (
                    <li style={{ cursor: 'pointer' }} onClick={() => paginate(number)} key={number}><a href='!#'></a>{number}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
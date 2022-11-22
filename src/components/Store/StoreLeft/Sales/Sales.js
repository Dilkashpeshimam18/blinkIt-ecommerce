import React from 'react'
import './Sales.css'
const Sales = () => {
    return (
        <div className='sales'>
            <h3>Sales</h3>
            <div style={{ cursor: 'pointer' }} className='sales__container'>
                <img className='sales__img' src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/shutdowndadhat.png?v=1663265819' />
                <div className='sales__body'>
                    <span className='sales__title'>SHUT DOWN HAT</span>
                    <span className='sales__price'>Rs 300</span>
                </div>

            </div>
            <div style={{ cursor: 'pointer' }} className='sales__container'>
                <img className='sales__img' src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_DyeF_faec3f21-5d3a-46e7-8beb-c863ba115477.png?v=1598016743' />
                <div className='sales__body'>
                    <span className='sales__title'>ICE CREAM CREWNECK PULLOVER</span>
                    <span className='sales__price'>Rs 600</span>
                </div>

            </div>
            <div style={{ cursor: 'pointer' }} className='sales__container'>
                <img className='sales__img' src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/SCRUNCHIE_587x.png?v=1611673302' />
                <div className='sales__body'>
                    <span className='sales__title'>THE SHOW SCRUNCHIE SET</span>
                    <span className='sales__price'>Rs 200</span>
                </div>

            </div>
        </div>
    )
}

export default Sales
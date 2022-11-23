import React from 'react'
import './ProductDetail.css'
const ProductDetail = () => {
    return (
        <div className='productDetail'>
            <div className='productDetail__container'>
                <div className='productDetail__container1'>
                    <img style={{ height: '640px', width: '640px', cursor: 'zoom-in' }} src='https://cdn.shopify.com/s/files/1/0022/5011/3123/products/BPSG_ICDyeTF.png?v=1598016592' />

                </div>
                <div className='productDetail__container2'>
                    <div className='productDetail__subContainer'>
                        <div className='productDetail__title'>
                            <h2 style={{ color: '#4e4e4e' }}>BORN PINK TOUR LOGO BUCKET HAT</h2>

                        </div>
                        <div style={{ paddingTop: '1px' }} className='productDetail__price'>
                            <h4 style={{ color: '#4e4e4e', fontWeight: 'bolder' }}>Rs 400</h4>

                        </div>
                        <div className='cart__body__quantity'>
                            <div className='quantity__subtract'>
                                <span style={{ marginLeft: '12px' }}>-</span>
                            </div>
                            <div className='quantity'>
                                1
                            </div>

                            <div className='quantity__add'>
                                <span style={{ marginLeft: '9px' }}> +</span>
                            </div>
                        </div>
                        <div className='productDetail__buttonContainer'>
                            <button className='productDetail__button'>ADD TO CART</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className='productDetail__reviewContainer'>
                <h4 style={{ color: '#444444', fontSize: '20px' }}>
                    Reviews
                </h4>

                <div className='productDetail__reviewFormContainer'>
                    <form className='productDetail__reviewForm'>
                        <div>
                            <p style={{ fontSize: '13px' }}>There is no reviews yet.</p>
                            <p style={{ fontWeight: 'bold' }}>Be the first to review</p>
                        </div>
                        <div className='productDetail__reviewInputContainer'>
                            <p style={{ color: '#444444' }}>Your review</p>
                            <textarea className='productDetail__reviewTextArea' type='text' required />
                        </div>
                        <div className='productDetail__reviewInputContainer'>
                            <p style={{ color: '#444444' }}>Name</p>
                            <input className='productDetail__reviewInput' type='text' required />
                        </div>
                        <div className='productDetail__reviewInputContainer'>
                            <p style={{ color: '#444444' }}>Email</p>
                            <input className='productDetail__reviewInput' type='email' required />
                        </div>
                        <div className='productDetail__reviewButtonContainer'>
                            <button className='productDetail__reviewButton' type='submit'>SUBMIT</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default ProductDetail
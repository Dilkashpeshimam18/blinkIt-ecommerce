import React from 'react'

const ProductDetailReview = () => {
    return (
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
    )
}

export default ProductDetailReview
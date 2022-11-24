import React, { useEffect, useState, useContext, useRef } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { Data } from '../Data/Data'
import CartContext from '../../store/cartContext'
const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState([{}])
    const [quantity, setQuantity] = useState(1)
    const [isSelected, setIsSelected] = useState(false)
    const [img, setImg] = useState('')
    const params = useParams()
    const { addProduct, } = useContext(CartContext)
    const ref = useRef([])
    ref.current = []
    useEffect(() => {
        let data = Data
        let product = data.filter((item) => {
            return item.productId == params.id
        })
        setProductDetail(product[0])
        console.log(productDetail)
    }, [params.id])

    const handleImgHover = (img, i) => {
        setImg(img)
    }


    return (
        <div className='productDetail'>
            <div className='productDetail__container'>
                <div className='productDetail__subImages'>
                    {
                        productDetail.subImg?.map((image, i) => {
                            return <div onMouseOver={() => handleImgHover(image, i)} className={i == 0 ? 'img__wrap active' : 'img__wrap'} key={i}>
                                <img src={image} alt='' />
                            </div>
                        })
                    }
                </div>
                <div className='productDetail__container1'>
                    <img style={{ height: '640px', width: '640px', cursor: 'zoom-in' }} src={img != '' ? img : productDetail.imageUrl} />

                </div>
                <div className='productDetail__container2'>
                    <div className='productDetail__subContainer'>
                        <div className='productDetail__title'>
                            <h2 style={{ color: '#4e4e4e' }}>{productDetail.title}</h2>

                        </div>
                        <div style={{ paddingTop: '1px' }} className='productDetail__price'>
                            <h4 style={{ color: '#4e4e4e', fontWeight: 'bolder' }}>Rs {productDetail.price}</h4>

                        </div>
                        <div className='productDetail__sizesContainer'>
                            <h4>Sizes</h4>
                            <div>
                                <button className='product__size'>S</button>
                                <button className='product__size'>M</button>
                                <button className='product__size'>L</button>
                                <button className='product__size'>XL</button>
                                <button className='product__size'>XLL</button>

                            </div>

                        </div>

                        <div className='productDetail__buttonContainer'>
                            <button onClick={() => {
                                addProduct({
                                    productId: productDetail.productId,
                                    title: productDetail.title,
                                    price: productDetail.price,
                                    img: productDetail.imageUrl,
                                    quantity: productDetail.quantity
                                })
                            }} className='productDetail__button'
                            > ADD TO CART</button>
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
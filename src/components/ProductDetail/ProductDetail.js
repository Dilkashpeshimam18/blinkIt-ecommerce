import React, { useEffect, useState, useContext, useRef } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { Data } from '../Data/Data'
import CartContext from '../../store/cartContext'
import ReactImageMagnify from 'react-image-magnify';
import { height, width } from '@mui/system'
import ProductDetailReview from './ProductDetailReview'
import ProductQuantity from '../ProductQuantity/ProductQuantity'


const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState([{}])
    const [quantity, setQuantity] = useState(1)
    const [isSelected, setIsSelected] = useState(false)
    const [img, setImg] = useState('')
    const params = useParams()
    const { addProduct, } = useContext(CartContext)
    const refs = useRef([])
    refs.current = []

    const handleAdd = () => {
        if (quantity <= 4) {
            setQuantity((prev) => prev + 1)



        }


    }


    const handleSubtract = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)

        }
    }
    useEffect(() => {
        let data = Data
        let product = data.filter((item) => {
            return item.productId == params.id
        })
        setProductDetail(product[0])
    }, [params.id])

    const handleImgHover = (img, i) => {
        setImg(img)
        let imgRef = refs.current
        imgRef[i]?.classList.add('active')
        let images = productDetail.subImg
        for (let j = 0; j < images.length; j++) {
            if (i !== j) {
                imgRef[j]?.classList.remove('active')
            }
        }
    }

    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el)
        }

    }

    return (
        <div className='productDetail'>
            <div className='productDetail__container'>
                <div className='productDetail__subImages'>
                    {
                        productDetail.subImg?.map((image, i) => {
                            return <div ref={addRefs} onMouseOver={() => handleImgHover(image, i)} className={i == 0 ? 'img__wrap active' : 'img__wrap'} key={i}>
                                <img src={image} alt='' />
                            </div>
                        })
                    }
                </div>

                <div className='productDetail__container1'>
                    {/* <img style={{ height: '640px', width: '640px', cursor: 'zoom-in' }} src={img != '' ? img : productDetail.imageUrl} /> */}
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Blackpink product',
                            src: img != '' ? img : productDetail.imageUrl,
                            width: 640,
                            height: 640

                        },
                        largeImage: {
                            src: img != '' ? img : productDetail.imageUrl,
                            width: 1200,
                            height: 1500
                        }
                    }} />
                </div>

                <div className='productDetail__container2'>
                    <div className='productDetail__subContainer'>
                        <div className='productDetail__title'>
                            <h2 style={{ color: '#4e4e4e' }}>{productDetail.title}</h2>

                        </div>
                        <div style={{ fontSize: '20px' }} className='productDetail__price'>
                            <h4 style={{ color: '#4e4e4e', fontWeight: 'bolder' }}>Rs {productDetail.price}</h4>

                        </div>
                        <div className='productDetail__quantityContainer' >
                            <div style={{ display: 'flex', marginBottom: '25px', marginTop: '30px' }} className='productDetail_quantity'>
                                <div onClick={handleSubtract} className='quantity__subtract'>
                                    <span style={{ marginLeft: '12px' }}>-</span>
                                </div>
                                <div className='quantity'>
                                    {quantity}
                                </div>

                                <div onClick={handleAdd} className='quantity__add'>
                                    <span style={{ marginLeft: '9px' }}> +</span>
                                </div>
                            </div>
                        </div>
                        <div className='productDetail__buttonContainer'>
                            <button onClick={() => {
                                addProduct({
                                    productId: productDetail.productId,
                                    title: productDetail.title,
                                    price: productDetail.price,
                                    img: productDetail.imageUrl,
                                    quantity: quantity
                                })
                                setQuantity(1)
                            }} className='productDetail__button'
                            > ADD TO CART</button>
                        </div>
                    </div>

                </div>

            </div>
            <ProductDetailReview />

        </div>
    )
}

export default ProductDetail
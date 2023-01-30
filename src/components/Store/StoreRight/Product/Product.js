import React, { useContext } from 'react'
import './Product.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContext from '../../../../store/cartContext';
import { Link } from 'react-router-dom';


const Product = ({ productId, title, price, img, quantity, category, subImg }) => {
    const { addProduct, isLoggedIn } = useContext(CartContext)
    return (
        <div className='product'>
            <img className='product__img' src={img} />
            <div className='product__container'>
                <div className='product__body'>
                    <Link style={{ textDecoration: 'none' }} to={'/product-detail/' + productId}>
                        <span style={{ marginTop: '10px' }} className='sales__title'>{title}</span>  </Link>
                    <span style={{ paddingTop: "5px" }} className='sales__price'>Rs {price}</span>
                </div>
                <div onClick={() => {
                    {
                        isLoggedIn == false ? alert('You need to login first!') :
                        addProduct({
                            productId: productId,
                            title: title,
                            price: price,
                            img: img,
                            quantity: quantity
                        })
                    }

                }}>
                    <ShoppingCartOutlinedIcon style={{ color: '#333', cursor: 'pointer', marginTop: '10px', fontSize: '30px' }} />

                </div>

            </div>

        </div>


    )
}

export default Product
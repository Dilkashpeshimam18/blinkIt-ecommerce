import React, { useState, useEffect } from 'react'
import CartContext from './cartContext'

const CartProvider = (props) => {
    const [products, setProducts] = useState([])
    const [numberOfProduct, setNumberOfProduct] = useState(0)

    const addProduct = (product) => {
        let existingItemIndex = products.findIndex(ele => ele.id === product.id)
        let existingItem = products[existingItemIndex]
        let updatedItem;
        let updatedItems
        if (existingItem) {

            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + product.quantity
            }

            setProducts((prevItem) => {
                updatedItems = [...prevItem]
                updatedItems[existingItemIndex] = updatedItem
                return updatedItems
            })

        } else {
            setProducts((prevItem) => {
                let updatedItems = [...prevItem]
                updatedItems.push(product)
                return updatedItems
            })
        }

        console.log(products)

    }

    const removeProduct = (product) => {

    }
    const removeAll = () => {

    }

    let cartValue = {
        products: products,
        numberOfProduct: numberOfProduct,
        setNumberOfProduct: setNumberOfProduct,
        addProduct: addProduct,
        removeProduct: removeProduct,
        removeAll: removeAll
    }
    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
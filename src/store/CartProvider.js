import React, { useState, useEffect, useMemo } from 'react'
import CartContext from './cartContext'

const CartProvider = (props) => {
    const [products, setProducts] = useState(() => {
        return JSON.parse(localStorage.getItem('allProduct')) || []
    })
    const [numberOfProduct, setNumberOfProduct] = useState(0)
    const [token, setToken] = useState(() => {
        return localStorage.getItem('tokenId') || null
    })
    const isLoggedIn = !!token

    let total = products.reduce((currAmount, item) => {
        return currAmount + item.price * item.quantity
    }, 0)

    useEffect(() => {
        localStorage.setItem('allProduct', JSON.stringify(products))
    }, [products])
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

    const removeProduct = (id) => {
        const removeProduct = products.filter((data) => {
            return data.id != id
        })
        setProducts(removeProduct)

    }
    const removeAll = () => {
        setProducts([])

    }

    const incrementQuantity = (id) => {
        let existingItemIndex = products.findIndex(ele => ele.id === id)
        let existingItem = products[existingItemIndex]
        let updatedItem;
        let updatedItems
        let currQuantity = existingItem.quantity

        if (existingItem) {

            if (currQuantity <= 4) {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
            } else {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity
                }
            }

            setProducts((prevItem) => {
                updatedItems = [...prevItem]
                updatedItems[existingItemIndex] = updatedItem
                return updatedItems
            })

        }

    }

    const decrementQuantity = (id) => {
        let existingItemIndex = products.findIndex(ele => ele.id === id)
        let existingItem = products[existingItemIndex]
        let updatedItem;
        let updatedItems
        let currQuantity = existingItem.quantity
        if (existingItem) {
            if (currQuantity <= 1) {
                updatedItem = {
                    ...existingItem,
                    quantity: 1
                }
            } else {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1
                }
            }

            setProducts((prevItem) => {
                updatedItems = [...prevItem]
                updatedItems[existingItemIndex] = updatedItem
                return updatedItems
            })

        }


    }

    const login = (token) => {
        localStorage.setItem('tokenId', token)
        setToken(token)
        console.log(isLoggedIn)
    }


    let cartValue = {
        products: products,
        numberOfProduct: numberOfProduct,
        setNumberOfProduct: setNumberOfProduct,
        addProduct: addProduct,
        removeProduct: removeProduct,
        removeAll: removeAll,
        incrementQuantity: incrementQuantity,
        decrementQuantity: decrementQuantity,
        total: total,
        token: token,
        isLoggedIn: isLoggedIn,
        login: login
    }
    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
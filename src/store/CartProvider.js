import React, { useState, useEffect, useMemo } from 'react'
import CartContext from './cartContext'
import axios from 'axios'
const CartProvider = (props) => {
    const [products, setProducts] = useState(() => {
        if (localStorage.getItem('tokenId')) {
            return JSON.parse(localStorage.getItem('allProduct'))

        } else {
            return []
        }
    })
    const [numberOfProduct, setNumberOfProduct] = useState(0)
    const [token, setToken] = useState(() => {
        return localStorage.getItem('tokenId') || null
    })
    const [email, setEmail] = useState('')
    const [userCart, setUserCart] = useState([])

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (localStorage.getItem('tokenId')) {
            return true
        } else {
            return false
        }
    })

    let total = products.reduce((currAmount, item) => {
        return currAmount + item.price * item.quantity
    }, 0)

    useEffect(() => {
        localStorage.setItem('allProduct', JSON.stringify(products))
    }, [products])

    const addProduct = async (product) => {
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
            try {
                let newProduct = { ...product, email: email }
                const response = await axios.post(`https://crudcrud.com/api/bf030c4f91524fc890c22b63b3e832a7/cartData`, newProduct)
                console.log(response.data)


            } catch (err) {
                console.log(err)

            }
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

    const login = (token, email) => {
        localStorage.setItem('tokenId', token)
        setToken(token)
        setEmail(email)
        setIsLoggedIn(true)
    }
    const getUserCart = async () => {
        try {
            const result = await axios.get('https://crudcrud.com/api/bf030c4f91524fc890c22b63b3e832a7/cartData')
            let data = result.data
            let userdata = data.filter((item) => {
                return item.email && item.email == email
            })
            console.log(userdata)
        } catch (err) {
            console.log(err)
        }
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
        login: login,
        email: email,
        getUserCart: getUserCart
    }
    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
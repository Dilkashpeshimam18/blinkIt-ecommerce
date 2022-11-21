import React, { useState, useEffect, useMemo } from 'react'
import CartContext from './cartContext'
import axios from 'axios'
import { collection, addDoc, doc, setDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

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
    const [email, setEmail] = useState(() => {
        if (localStorage.getItem('userEmail')) {
            return localStorage.getItem('userEmail')
        } else {
            return ''
        }
    })
    const [userCart, setUserCart] = useState([])

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (localStorage.getItem('tokenId')) {
            return true
        } else {
            return false
        }
    })

    let total = products?.reduce((currAmount, item) => {
        return currAmount + item.price * item.quantity
    }, 0)
    let userCartRef;
    if (email != '') {
        userCartRef = collection(collection(db, 'userCart'), email, email)

    } else {
        userCartRef = collection(db, 'userCart')
    }


    useEffect(() => {
        localStorage.setItem('allProduct', JSON.stringify(products))
    }, [products])

    const addProduct = async (product) => {
        let id = product.id
        let existingItemIndex = products.findIndex(ele => ele.id === product.id)
        let existingItem = products[existingItemIndex]
        let updatedItem;
        let updatedItems
        if (existingItem) {
            try {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + product.quantity
                }

                setProducts((prevItem) => {
                    updatedItems = [...prevItem]
                    updatedItems[existingItemIndex] = updatedItem
                    return updatedItems
                })
                const usercartdoc = doc(userCartRef, id)
                await updateDoc(usercartdoc, updatedItem)
            } catch (err) {
                console.log(err)
            }


        } else {
            try {
                setProducts((prevItem) => {
                    let updatedItems = [...prevItem]
                    updatedItems.push(product)
                    return updatedItems
                })
                const updateEmail = email.replace('@', '').replace('.', '')
                await addDoc(userCartRef, product)


            } catch (err) {
                console.log(err)

            }
        }

        console.log(products)

    }

    const removeProduct = async (id) => {
        try {
            const removeProduct = products.filter((data) => {
                return data.id != id
            })
            setProducts(removeProduct)
            const usercartdoc = doc(userCartRef, id)
            await deleteDoc(usercartdoc)

        } catch (err) {
            console.log(err)

        }


    }
    const removeAll = () => {
        setProducts([])

    }

    const incrementQuantity = async (id) => {
        let existingItemIndex = products.findIndex(ele => ele.id === id)
        let existingItem = products[existingItemIndex]
        let updatedItem;
        let updatedItems
        let currQuantity = existingItem.quantity
        try {

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
                const usercartdoc = doc(userCartRef, id)
                await updateDoc(usercartdoc, updatedItem)

            }

        } catch (err) {
            console.log(err)
        }


    }

    const decrementQuantity = async (id) => {
        let existingItemIndex = products.findIndex(ele => ele.id === id)
        let existingItem = products[existingItemIndex]
        let updatedItem;
        let updatedItems
        let currQuantity = existingItem.quantity
        try {
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
                const usercartdoc = doc(userCartRef, id)
                await updateDoc(usercartdoc, updatedItem)

            }

        } catch (err) {
            console.log(err)
        }



    }

    const login = (token, email) => {
        localStorage.setItem('tokenId', token)
        setToken(token)
        setEmail(email)
        setIsLoggedIn(true)
        localStorage.setItem('userEmail', email)
    }

    const getUserCart = async () => {
        try {
            const response = await getDocs(userCartRef)
            const res = response.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id

            }))
            console.log(res)
            setProducts(res)
            localStorage.setItem('allProduct', res)
        } catch (err) {

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
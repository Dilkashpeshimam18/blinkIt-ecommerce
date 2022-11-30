import React, { useState, useEffect, useMemo } from 'react'
import CartContext from './cartContext'
import { collection, addDoc, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { Data } from '../components/Data/Data'
import { useNavigate } from 'react-router-dom'

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
    const [data, setData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (localStorage.getItem('tokenId')) {
            return true
        } else {
            return false
        }
    })
    const [homeData, setHomeData] = useState([])
    const [searchProduct, setSearchProduct] = useState('')
    const [isFilter, setIsFilter] = useState(false)
    let total = products?.reduce((currAmount, item) => {
        return currAmount + item.price * item.quantity
    }, 0)
    const navigate = useNavigate()
    let userCartRef;
    if (email != '') {
        userCartRef = collection(collection(db, 'userCart'), email, email)

    } else {
        userCartRef = collection(db, 'userCart')
    }


    useEffect(() => {
        localStorage.setItem('allProduct', JSON.stringify(products))
    }, [products])

    useEffect(() => {
        let data = Data
        setData(data)

    }, [Data])

    const addProduct = async (product) => {
        let productArray = JSON.parse(localStorage.getItem('allProduct'))
        let existingItem = productArray.find(ele => ele.title === product.title)
        let updatedItem;
        if (existingItem) {
            try {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + product.quantity
                }


                const usercartdoc = doc(userCartRef, existingItem.id)
                await updateDoc(usercartdoc, updatedItem)
                getUserCart()
            } catch (err) {
                console.log(err)
            }


        } else {
            try {

                await addDoc(userCartRef, product)
                getUserCart()

            } catch (err) {
                console.log(err)

            }
        }



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
    const removeAll = async () => {
        try {

            const response = await getDocs(userCartRef)


            const res = response.docs.forEach((doc) => {
                deleteDoc(doc.ref)

            })

            setProducts([])
            localStorage.setItem('allProduct', products)

        } catch (err) {
            console.log(err)
        }

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
            setProducts(res)
            localStorage.setItem('allProduct', res)
        } catch (err) {
            console.log(err)
        }
    }

    const searchHandler = (currLocation) => {
        if (currLocation == '/store') {

            navigate('/')
            const filterItem = Data.filter((data) => {
                return data.title.toLowerCase().includes(searchProduct.toLowerCase())
            })
            setHomeData(filterItem)
        } else if (currLocation == '/about') {

            navigate('/')
            const filterItem = Data.filter((data) => {
                return data.title.toLowerCase().includes(searchProduct.toLowerCase())
            })
            setHomeData(filterItem)

        } else if (currLocation == '/contact') {

            navigate('/')
            const filterItem = Data.filter((data) => {
                return data.title.toLowerCase().includes(searchProduct.toLowerCase())
            })
            setHomeData(filterItem)

        } else {

            const filterItem = Data.filter((data) => {
                return data.title.toLowerCase().includes(searchProduct.toLowerCase())
            })
            setHomeData(filterItem)
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
        getUserCart: getUserCart,
        data: data,
        setData: setData,
        homeData: homeData,
        setHomeData: setHomeData,
        searchProduct: searchProduct,
        setSearchProduct: setSearchProduct,
        searchHandler: searchHandler
    }
    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
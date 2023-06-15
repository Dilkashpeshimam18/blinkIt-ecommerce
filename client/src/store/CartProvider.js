import React, { useState, useEffect, useMemo } from 'react'
import CartContext from './cartContext'
import { collection, addDoc, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { Data } from '../components/Data/Data'
import { useNavigate } from 'react-router-dom'
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
    const [showLogout, setShowLogout] = useState(false)
    const [open, setOpen] = useState(false);


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

    const handleOrderOpen = () => {

        setOpen(true);
    };

    const handleOrderClose = () => {
        setOpen(false);

    };
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
    const logout = () => {
        setToken(null)
        setEmail('')
        setProducts([])
        setIsLoggedIn(false)
        setShowLogout(false)
        localStorage.removeItem('tokenId')
        localStorage.removeItem('userEmail')
        localStorage.removeItem('allProduct')
    }
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const payWithRazorpay = async (amount) => {
        try {
            const data = {
                amount: amount
            }
            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }

            const order = await axios.post('http://localhost:4000/order/paywith-razorpay', data)

            const options = {
                key: order.data.key_id,
                order_id: order.data.order.id,
                handler: async (response) => {
                    const data = {
                        orderId: options.order_id,
                        paymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,

                    }

                    alert('Congrats! Your order is successful.')
                    handleOrderClose()
                    removeAll()


                },

            }

            const payment = new window.Razorpay(options)
            payment.open()
            payment.on('payment.failed', async (res) => {
                const orderId = res.error.metadata.order_id
                const data = {
                    status: 'failed',
                    orderId: orderId
                }

                alert('Something went wrong!')
            })
        } catch (err) {
            console.log(err)
        }
    }

    const payWithStripe=async(products)=>{
         try{
           const email= localStorage.getItem('userEmail')
           const data={
            email:email,
            products
           }

            const res=await axios.post('http://localhost:4000/order/paywith-stripe',data)

            console.log('Stripe payment',res)
            if(res.status==200 && res.data.url){
                window.location.href = res.data.url;

            }else{
                alert('Something went wrong!')
            }

         }catch(err){
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
        getUserCart: getUserCart,
        data: data,
        setData: setData,
        homeData: homeData,
        setHomeData: setHomeData,
        searchProduct: searchProduct,
        setSearchProduct: setSearchProduct,
        searchHandler: searchHandler,
        logout: logout,
        showLogout: showLogout,
        setShowLogout: setShowLogout,
        payWithRazorpay: payWithRazorpay,
        handleOrderClose: handleOrderClose,
        handleOrderOpen: handleOrderOpen,
        open: open,
        setOpen: setOpen,
        payWithStripe:payWithStripe
    }
    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
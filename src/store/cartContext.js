import React, { createContext } from 'react'


const CartContext = createContext({
    products: [],
    totalAmount: 0,
    numberOfProduct: 0,
    addProduct: (product) => { },
    removeProduct: (id) => { },
    removeAll: () => { },
    incrementQuantity: (id) => { },
    decrementQuantity: (id) => { },
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    email: '',
    getUserCart: () => { }


})

export default CartContext
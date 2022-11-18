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

})

export default CartContext
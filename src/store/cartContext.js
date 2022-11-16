import React, { createContext } from 'react'


const CartContext = createContext({
    products: [],
    numberOfProduct: 0,
    addProduct: (product) => { },
    removeProduct: (product) => { },
    removeAll: () => { }

})

export default CartContext
import React, { createContext } from 'react'


const CartContext = createContext({
    products: [],
    numberOfProduct: 0,
    addProduct: (product) => { },
    removeProduct: (id) => { },
    removeAll: () => { }

})

export default CartContext
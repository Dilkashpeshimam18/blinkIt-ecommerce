import { createContext } from 'react'

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
    getUserCart: () => { },
    data: [],
    homeData: [],
    searchProduct: '',
    searchHandler: (currLocation) => { },
    isFilter: false,
    logout: () => { },
    showLogout: false,
    payWithRazorpay: (amount) => { },
    loadScript:(src)=>{},
    open:false,
    handleOrderClose:()=>{},
    handleOrderOpen:()=>{},
    payWithStripe:()=>{}

})

export default CartContext
import React, { useState, useContext, Suspense, useEffect } from 'react';
import './App.css';
import SlidingCart from './components/Cart/SlidingCart';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';
import { Routes, Route, Navigate } from 'react-router-dom'
import CartContext from './store/cartContext';
import CircularProgress from '@mui/material/CircularProgress';

const Home = React.lazy(() => import('./components/Home/Home'))
const Store = React.lazy(() => import('./components/Store/Store'))
const About = React.lazy(() => import('./components/About/About'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))
const Login = React.lazy(() => import('./components/Login/Login'))
const SignUp = React.lazy(() => import('./components/SignUp/SignUp'))
const ProductDetail = React.lazy(() => import('./components/Product/ProductDetail'))
function App() {
  const [isPane, setIsPane] = useState(false)
  const { isLoggedIn } = useContext(CartContext)

  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', paddingTop: '300px' }}>
      <CircularProgress color='primary' size={100} />
    </div>}>

      <CartProvider>
        <div className="app">
          <Header setIsPane={setIsPane} />
          <SlidingCart isPane={isPane} setIsPane={setIsPane} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store setIsPane={setIsPane} />
            } />

            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />
            } />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/product-detail' element={<ProductDetail />} />
          </Routes>
        </div>

      </CartProvider>
    </Suspense>


  );
}

export default App;

import React, { useState, useContext, Suspense, useEffect } from 'react';
import './App.css';
import SlidingCart from './components/Cart/SlidingCart';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import CartProvider from './store/CartProvider';
import { Routes, Route, Navigate } from 'react-router-dom'
// import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CartContext from './store/cartContext';
import ProductDetail from './components/Product/ProductDetail';
import CircularProgress from '@mui/material/CircularProgress';

const Home = React.lazy(() => import('./components/Home/Home'))
function App() {
  const [isPane, setIsPane] = useState(false)
  const { isLoggedIn } = useContext(CartContext)
  useEffect(() => {

  }, [])
  return (
    <Suspense fallback={<CircularProgress style={{ fontSize: '100px' }} />}>

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

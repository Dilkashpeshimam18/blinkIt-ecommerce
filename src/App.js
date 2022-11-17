import React, { useState } from 'react';
import './App.css';
import SlidingCart from './components/Cart/SlidingCart';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import CartProvider from './store/CartProvider';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const [isPane, setIsPane] = useState(false)

  return (
    <CartProvider>
      <div className="app">
        <Header setIsPane={setIsPane} />
        <SlidingCart isPane={isPane} setIsPane={setIsPane} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store setIsPane={setIsPane} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </CartProvider>

  );
}

export default App;

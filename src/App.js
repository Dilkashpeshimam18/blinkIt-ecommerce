import React, { useState } from 'react';
import './App.css';
import SlidingCart from './components/Cart/SlidingCart';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import CartProvider from './store/CartProvider';

function App() {
  const [isPane, setIsPane] = useState(false)

  return (
    <CartProvider>
      <div className="app">
        <SlidingCart isPane={isPane} setIsPane={setIsPane} />
        <Store setIsPane={setIsPane} />
      </div>
    </CartProvider>

  );
}

export default App;

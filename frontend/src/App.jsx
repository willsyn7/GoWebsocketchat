import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useLocation } from ''

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Marketplace from './components/Marketplace/Marketplace.jsx';
import Cart from './components/Cart/Cart.jsx';
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

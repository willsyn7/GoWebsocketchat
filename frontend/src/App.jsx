import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';



import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Marketplace from './components/Marketplace/Marketplace'
import './App.css';

function App() {
  
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/marketplace' element={<Marketplace />} /> */}
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;

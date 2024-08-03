import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';



import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
// import Marketplace from './components/Marketplace/Marketplace'
import './App.css';

function App() {
  
  return (
    <>
      <NavBar />
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

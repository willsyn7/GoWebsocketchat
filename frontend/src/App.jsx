import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
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

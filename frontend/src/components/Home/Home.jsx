/* =======================================================
Imports
=======================================================*/

import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';


/* =======================================================
Helper Functions
=======================================================*/

/* =======================================================
Component
=======================================================*/

function Home(props) {
  const [loginForm,setLoginForm] = useState(1)
  
  const handleFormSwap = () => {
      setLoginForm(loginForm*-1)
      // console.log(loginForm)
  }

  return (
    <>
      <div>
            {loginForm > 0 ? (
                <>
                    <SigninForm handleFormSwap={handleFormSwap}/>
                </>
            ):(
                <SignupForm handleFormSwap={handleFormSwap}/>
            )}
        </div>
      </>
  );
}

export default Home;

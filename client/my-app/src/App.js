import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './LoginPage/login';
import Signup from './signup/register';
import Home from './Home/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;



import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Home from './Screens/Home';
import Shop from './Screens/Shop';
import Cart from './Screens/Cart';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Navbar />
    <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/Shop"  element={<Shop/>} />
        <Route path="/Cart"  element={<Cart/>} />

  
    </Routes>
  

    </>
  )
}

export default App

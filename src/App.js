import React, {Component} from 'react';
import Home from './views/home/Home';
import {Games} from './components/games/Games'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarCom from './components/navigations/Navbar';


function App() {
  return (
    <BrowserRouter>
    <NavbarCom/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/games" element={<Games/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

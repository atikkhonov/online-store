import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import CartPage from './pages/CartPage';
import { ComparePage } from './pages/ComparePage';
import { ContactsPage } from './pages/ContactsPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/favorite" element={<ShopPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </>
  );
}

export default App;

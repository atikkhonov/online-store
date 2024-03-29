import React from 'react';

import { Routes, Route } from 'react-router-dom'
import ProfileModal from './components/elements/ProfileModal';
import Layout from './layout/Layout';

import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ComparePage from './pages/ComparePage';
import ContactsPage from './pages/ContactsPage';
import FavoritePage from './pages/FavoritePage';
import ShopPage from './pages/ShopPage';

export const SearchContext = React.createContext<string | any>(undefined)

function App() {
  const [ search, setSearch ] = React.useState<string>('')
  const [activeModal, setActiveModal] = React.useState<boolean>(false)
  
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Routes>
          <Route path="/" element={<Layout activeModal={activeModal} setActiveModal={setActiveModal}/>}>
            <Route index element={<ShopPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/favorite" element={<FavoritePage/>}/>
            <Route path="/compare" element={<ComparePage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Route>
        </Routes>
      </SearchContext.Provider>
      <ProfileModal activeModal={activeModal} setActiveModal={setActiveModal}/>
    </>
  );
}

export default App;

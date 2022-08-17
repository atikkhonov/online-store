import React, { Dispatch, SetStateAction } from 'react'

import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'

interface LayoutProps {
  activeModal: boolean;
  setActiveModal: Dispatch<SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ activeModal, setActiveModal }) => {
  return (
    <>
      <Header activeModal={activeModal} setActiveModal={setActiveModal}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
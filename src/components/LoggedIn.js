import React from 'react';
import Header from "./LoggedIn/Header";
import Special from "./LoggedIn/Special";
import Main from "./LoggedIn/Main";
import Footer from "./LoggedIn/Footer";
// import { ShoppingCartProvider } from '../context/CartContext';


export default function LoggedIn() {
  return (
    
    <>
       <Header />
        <Special />
        <Main />
        <Footer />
    </>   
  )
}


import React from "react";
import LoggedIn from "./components/LoggedIn";
import Wishlist from "./pages/wishlist";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/CartContext";
import { HashRouter, Routes, Route } from "react-router-dom";

// const isLoggedIn = true;


function App(){
  return (
    <ShoppingCartProvider>
      <HashRouter>
        <Routes>
            <Route index element={<LoggedIn />} />
            <Route exact path="/" element={<LoggedIn/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/account" element={<Account />} />
        </Routes>
      </HashRouter>
    </ShoppingCartProvider>
    
  )
}

export default App;



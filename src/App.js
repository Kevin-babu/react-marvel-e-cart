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
            <Route exact path="react-marvel-e-cart" element={<LoggedIn/>} />
            <Route exact path="react-marvel-e-cart/#/cart" element={<Cart/>} />
            <Route exact path="react-marvel-e-cart/#/wishlist" element={<Wishlist />} />
            <Route exact path="react-marvel-e-cart/#/account" element={<Account />} />
        </Routes>
      </HashRouter>
    </ShoppingCartProvider>
    
  )
}

export default App;



import React from "react";
import LoggedIn from "./components/LoggedIn";
import Wishlist from "./pages/wishlist";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import { ShoppingCartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const isLoggedIn = true;


function App(){
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
            <Route index element={<LoggedIn />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  )
}

export default App;



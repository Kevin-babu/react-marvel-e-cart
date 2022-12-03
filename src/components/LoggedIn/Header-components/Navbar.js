import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useShoppingCart } from "../../../context/CartContext";

function Navibar(){
  const {cartItems, wishItems} = useShoppingCart()
  return (
    <Navbar bg="light" variant="light" fixed="top" className="shadow" style={{height : ""}} expand="md">
        <Container>
          <Navbar.Brand href="/">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="ms-auto">  
            <Nav.Link href="/#/cart">
            Cart
              <div className="cart-num">
              {cartItems.reduce((value,item) => {
                return (value+item.quantity)
              }, 0)}
              </div>
            
            </Nav.Link>
            <Nav.Link href="/#/wishlist">
            Wishlist
            <div className="cart-num">
              {wishItems.reduce((value,item) => {
                return (value+item.inWish)
              }, 0)}
              </div>
            </Nav.Link>
            <Nav.Link href="/#/account">Account</Nav.Link>
        </Nav>  
      </Navbar.Collapse>  
        </Container>
      </Navbar>
  
  
  )
}

export default Navibar;




// <li className="nav-item">
// <a className="nav-link" href="/Cart">Cart</a>
// </li>
// <li className="nav-item">
// <a className="nav-link" href="/Wishlist">Wishlist</a>
// </li>

// switch (window.location.pathname) {
//   case "/":
//     return(
//     <ShoppingCartProvider>
//     <LoggedIn/></ShoppingCartProvider>  );
//   case "/Cart":
//     return(<Cart />)
//   case "/Wishlist":
//     return(<Wishlist/>)
//   case "/Account":
//     return(<Account />)
//   default: 
//     return null;
//   }

// <Nav className="ms-auto">
//             <Nav.Link href="/cart">
//               <div className="cart-num">
//               {cartItems.reduce((value,item) => {
//                 return (value+item.quantity)
//               }, 0)}
//               </div>
//             Cart
//             </Nav.Link>
//             <Nav.Link href="/wishlist">Wishlist</Nav.Link>
//             <Nav.Link href="/account">Account</Nav.Link>
//           </Nav>
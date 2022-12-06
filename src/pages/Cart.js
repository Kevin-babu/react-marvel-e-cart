import React from 'react';
import Navbar from '../components/LoggedIn/Header-components/Navbar';
import CartCard from './CartCard';
import Products from '../data/product-details';
import MainProducts from '../data/ProductList';
import { useShoppingCart } from '../context/CartContext';
import { Container } from 'react-bootstrap';





export default function Cart() {

  const {cartItems}= useShoppingCart()
  
  function createCartCards(product){
    
    if (cartItems.find(item => item.id === product.id)){

      return (
        <>
            <CartCard 
                    name={product.Pname}
                    id={product.id}
                    imgurl={product.imgUrl}
                    price={product.Price}
                    quantity={cartItems.find(item => item.id === product.id).quantity}
                />
                <hr></hr>
        </>)
    }}
    
   const totalPrice= cartItems.reduce((total, item) => {
      const product= Products.find(pro => pro.id=== item.id )
      return (total + (product.Price || 0)*item.quantity);
    }, 0)

    // const [totalPrice, setTotalPrice] = useState(0)
    // Products.map((product) => {setTotalPrice((currPrice)=>{return(currPrice+ getItemQuantity(product.id))})})
  
    
  return (
    <>
        <Navbar />
        <Container>
          <div className='cart-container'>
          <h1>Your Cart</h1>
          <div className='cart'>
          <hr/>
            {MainProducts.map(createCartCards)} 
              <span>Total price:</span><span className='tprice'>${totalPrice}</span>
          </div>
          </div>
        </Container>
        
        
        
    </>
  )
}

import React from 'react';
import Navbar from '../components/LoggedIn/Header-components/Navbar';
import Products from '../data/product-details';
import { Container, Row } from 'react-bootstrap';
import { useShoppingCart } from '../context/CartContext';
import { Card, Col, Button } from 'react-bootstrap';
import MainProducts from '../data/ProductList';

export default function Wishlist() {

const {wishItems, removeFromWishlist , setIncrement, getItemQuantity }= useShoppingCart() 

function createWishCard(product){
  const quantity= getItemQuantity(product.id)
  if (wishItems.find(item => item.id === product.id)){

    return (
      <div style={{marginTop : "100px", textAlign: "center"}}>
         <Col>
          <Card style={{width: "20rem", color: "black"}} className="mb-3 shadow">
            <Card.Img variant="top" src={product.imgUrl} className="main-img"/>
            <Card.Body>
              <Card.Title style={{color: 'black'}}>{product.Pname}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{fontSize: "1.2rem"}}>${product.Price}</Card.Subtitle>
              <Button variant="danger" onClick={()=>{removeFromWishlist(product.id)}}>Remove</Button>
              {quantity === 0?
                <Button variant="dark" onClick={()=>{setIncrement(product.id)}}>Add to Cart</Button>
                :
                <Button variant="light" >Item in Cart</Button>
              }
            </Card.Body>
          </Card>
        </Col>
      </div>
     
)
  }

}
  return (
    <>
        <Navbar />
        <div>
        <Container className=" mb-3">
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {MainProducts.map(createWishCard)}
        </Row>
    </Container>
   </div> 
    </>   
  )
}


import React from 'react'
import { Card,  Col , Button} from "react-bootstrap";
import { useShoppingCart } from '../../../context/CartContext';



// Object.assign(item, {quantity: 0})
export default function Procard(props) {

  const {
    getItemQuantity,
    setIncrement,
    setDecrement,
    addToWishlist,
    removeFromWishlist,
    inWishlist,
  } = useShoppingCart()

   
    const quantity= getItemQuantity(props.product.id);
    const inWish = inWishlist(props.product.id);
  return (
    <Col>
      <Card style={{width: "20rem", color: "black"}} className="mb-3 shadow">
        <Card.Img variant="top" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="main-img"/>
        <Card.Body>
          <Card.Title style={{color: 'black'}}>{props.product.Pname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{fontSize: "1.2rem"}}>${props.product.Price}</Card.Subtitle>

          {quantity === 0 ? 
          <div>
          <Button variant="secondary" onClick={()=>{setIncrement(props.product.id)}}>Add to cart</Button>
          {/* <Button variant="danger" onClick={()=>addToWishlist(props.product.id)}>Wishlist</Button> */}
          {inWish === 1 ?
            <Button variant="danger" onClick={()=>{removeFromWishlist(props.product.id)}}>Wishlisted</Button>
            :
             <Button variant="danger" onClick={()=>{addToWishlist(props.product.id)}}>Wishlist</Button>}
          </div>
          :
          <div>
          <Button onClick={()=>{ setDecrement(props.product.id)}}>-</Button>{quantity}<Button onClick={()=>{setIncrement(props.product.id)}}>+</Button>
          {/* <p>added to cart</p> */}
          </div>
          }
          
          
        </Card.Body>
      </Card>
    </Col>
    
  )
}

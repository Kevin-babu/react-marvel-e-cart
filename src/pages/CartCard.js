import React from 'react';
import {  Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/CartContext';



export default function CartCard(props) {
  const {
    setIncrement,
    setDecrement
  }= useShoppingCart()
  return (
      <div className='cart-card'>
        <div className='cart-d'>
          <img  src={props.imgurl}  alt="img" />
        
          <div className='cart-card-disc'>
              <h4>{props.name}</h4>
          </div>
        </div>
        <span style={{margin : "0 10%", display: "inline-block"}}><Button onClick={()=>{ setDecrement(props.id)}}>-</Button>{props.quantity}<Button onClick={()=>{setIncrement(props.id)}}>+</Button></span>
        <h4 class="price">${props.price*props.quantity}</h4>
    </div>
  )
}

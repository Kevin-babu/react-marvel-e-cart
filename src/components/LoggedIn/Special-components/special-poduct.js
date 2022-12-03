import React from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../../context/CartContext";
import {FcCheckmark} from "react-icons/fc"
// import { Link } from "react-router-dom";



function SpecialProduct(props){
    const className= "carousel-item "+ props.status;
    
    const {
      getItemQuantity,
      setIncrement,
      addToWishlist,
      inWishlist,
    } = useShoppingCart()
    
    const quantity= getItemQuantity(props.product.id);
    const inWish = inWishlist(props.product.id);
  return (
      <div className={className} style={{backgroundColor : props.product.color}}>
      <img className="special-pro" src={props.product.imgUrl} alt="img"/>
      <div className="pro">
        <h1>{props.product.Pname}</h1>
        <p>{props.product.Description}</p>
        <h2>$ {props.product.Price}</h2> 
        </div>
        {quantity === 0?
        <>
        <button className="btn btn-light" onClick={()=>{setIncrement(props.product.id)}} >Add to Cart</button>
        {inWish === 1 ?
            <Button variant="danger">Wishlisted</Button>
            :
          <button className="btn btn-danger" onClick= {()=>{addToWishlist(props.product.id)}} >Add to Wishlist</button>
        }
        </>
          :
        <>
          <Button variant="light"><FcCheckmark/>Added to Cart</Button>
        </>
        }
        
        
      
         
    </div>
  );
}

export default SpecialProduct;
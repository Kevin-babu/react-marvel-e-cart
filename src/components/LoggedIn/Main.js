import React from "react";
import { Container , Row} from "react-bootstrap";
import Products from "../../data/product-details";
import Procard from "./Main-components/card";
import MainProducts from "../../data/ProductList";
// import useLocalStorage from "../../hooks/useLocalStorage";

function createCard(product){
  
  return <Procard   
   product= {product}
    
 />
 }
 
function Main(){


  return (
   <div className="main ">
    <Container className=" mb-3">
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
          {MainProducts.map(createCard)}
        </Row>
    </Container>
   </div> 
  
  
  )
}

export default Main;

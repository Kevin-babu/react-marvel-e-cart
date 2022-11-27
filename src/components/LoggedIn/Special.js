import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "./Special-components/carousel"

function Special(){
  return (
    <>
    <div>
    <h1 className="popular">Most Popular</h1>
    </div>
      <Container className="special">
        <Carousel />
      </Container> 
  
    </>
    
  
  )
}

export default Special;
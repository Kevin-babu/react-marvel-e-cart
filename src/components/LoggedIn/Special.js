import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "./Special-components/carousel"

function Special(){
  return (
    <>
    <div className="update-site">
      The complete website is now live at  <a href="https://musical-granita-1a6604.netlify.app/">https://musical-granita-1a6604.netlify.app/</a>  
    </div>
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
import React from "react";
import SpecialProduct from "./special-poduct";
import Buttons from "./button-components";
import Products from "../../../data/product-details";
import Indicator from "./indicators";




function creatIndicators(ind){
  const Pstatus= ind.id === 1 ? "active" : "";
  return <Indicator
    key={ind.id}
    num= {ind.id-1}
    status= {Pstatus}
   />
}


function Carousel(){
  function creatCarousel(product){
    const Pstatus= product.id === 1 ? "active" : "";
      return <SpecialProduct 
        key= {product.id}
        product= {product}
        status={Pstatus}
      />
  }
  return (
    <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {Products.map(creatIndicators)}
      </div>
      <div className="carousel-inner">
        {Products.map(creatCarousel)}
      </div>
      <Buttons />
    </div>
  
  
  )
}

export default Carousel;
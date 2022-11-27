import React from "react";

function Indicator(props){
  return (
        <button type="button" data-bs-target="#carouselExampleIndicators" 
        data-bs-slide-to= {props.num}  
        class= {props.status} 
        aria-current="true" aria-label="Slide 1"></button>
    )
}

export default Indicator;
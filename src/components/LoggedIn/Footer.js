import React from "react";
const date= new Date();

function Footer(){
  return (
   <div>
      <footer>
      <img className="stanlee" src="https://i.icanvas.com/list-hero/lll-TDR261.jpg" alt="stanlee" /><br/>
      <span className="marvel">Inspired by marvel comics</span><br/>
      view code on <a href="https://github.com/Kevin-babu/react-marvel-e-cart" target="blank">Github</a> <br/>
       © {date.getFullYear()} Kevin Babu<br/>
      <span className="credit" >Designed and developed by Kevin Babu</span>
      </footer>
   </div> 
  
  
  )
}

export default Footer;
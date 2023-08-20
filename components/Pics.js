import picStyle from '../styles/Pics.module.css'
import React, { useState,useEffect } from 'react';

const Pics = () => {

    const [picture,setPicture] = useState("/About.png")
    useEffect(function changebg() {
      window.addEventListener("scroll", (event)=>{
         if(  window.scrollY > 1500 ){
         setPicture("/Contact.png");
         }else if(  window.scrollY > 500){
          setPicture("/Skills.png");
         }else if(  window.scrollY > 0){
          setPicture("/About.png");
         }
      });
    });
  
  return (
    <div className={picStyle.container} id={"#div"}>
      <img  src={picture} id={picStyle.bg}  />    
    </div>
  )
}

export default Pics
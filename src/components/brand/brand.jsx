import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import "./brand.css"

import Lottie from 'lottie-react';

const brand = (props) => {
  const buttonText=props.buttonText;
  const animation=props.animation;
  
  return (
    <div className='innate-corp__brand'>
      <div className='innate-corp__brand-content__Big__text section__padding'>
       
       <span style={{color:'#000'}}>Brand Consultancy<br/>
       Services
       </span>
        <br />
          

        { <button className='button'><p>{buttonText}</p> </button> }
        {/* <AiOutlineArrowRight className='arrow' color="white" size={27}/> */}
      </div>
      <div id="brand-anim"className='innate-corp__brand-image'>
      <Lottie
        loop
        animationData={animation}
       
        className='Brand-anim'
        style={{ width: "41.06730769230769vw" , height: "66.24303554274736vh"}}
        />
      </div>
    </div>
  )
}

export default brand
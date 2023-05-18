import React from 'react'
import "./analytics.css"

import Lottie from 'lottie-react';

const analytics = (props) => {

  const buttonText=props.buttonText;
  const animation=props.animation;
  
  return (
    <div className='innate-corp__analytics'>
      <div className='innate-corp__analytics-content__Big__text section__padding'>
      <span style={{color:'#000'}}>Google Analytics <br/>Service</span>
        
        <br/>

        { <button className='button'><p>{buttonText}</p> </button> }
        {/* <AiOutlineArrowRight className='arrow' color="white" size={27}/> */}
      </div>
      <div className='innate-corp__analytics-image'>
      <Lottie
        loop
        animationData={animation}

        className='analytics-anim'
        style={{ width: "41.06730769230769vw" , height: "66.24303554274736vh"}}
        />
      </div>
    </div>
  )
}

export default analytics
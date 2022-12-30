import React from 'react'
import './UX.css'

import Lottie from 'lottie-react';

const ux = (props) => {

  const buttonText=props.buttonText;
  const animation=props.animation;
  
  return (
    <div className='innate-corp__ux'>
      <div className='innate-corp__ux-content__Big__text section__padding'>
      <span style={{color:'#83C33F'}}>User Experience </span><br/>(UX/UI)

        <br/>
        <br />
          

        { <button className='button-ux'><p>{buttonText}</p> </button> }
        {/* <AiOutlineArrowRight className='arrow' color="white" size={27}/> */}
      </div>
      <div className='innate-corp__ux-image'>
      <Lottie
        loop
        animationData={animation}

        className='ux-anim'
        style={{ width: "700px" , height: "700px"}}
        />
      </div>
    </div>
  )
}

export default ux
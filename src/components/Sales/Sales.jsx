import React from 'react'
import './Sales.css'

import Lottie from 'lottie-react';

const Sales = (props) => {

  const buttonText=props.buttonText;
  const animation=props.animation;
  
  return (
    <div className='innate-corp__Sales'>
      <div className='innate-corp__Sales-content__Big__text section__padding'>
      Generate <br/><span style={{color:'#83C33F'}}>Online Sales</span>

        <br/>
        <br />
          

        { <button className='button-Sales'><p>{buttonText}</p> </button> }
        {/* <AiOutlineArrowRight className='arrow' color="white" size={27}/> */}
      </div>
      <div className='innate-corp__Sales-image'>
      <Lottie
        loop
        animationData={animation}

        className='Sales-anim'
        style={{ width: "700px" , height: "700px"}}
        />
      </div>
    </div>
  )
}

export default Sales
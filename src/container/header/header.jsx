import React,{useState} from 'react';
import svg from './Innate corp elements.svg';
import analytics from '../../assets/Header Files/zip/analytics.svg';
import brand from '../../assets/Header Files/zip/brand.svg';
import sales from '../../assets/Header Files/zip/online Sales.svg';
import UX from '../../assets/Header Files/zip/UX.svg';
import Lottie from 'lottie-react';
import Analytics_animation from './animations/Analytics.json'
import Sales_anim from './animations/Online-Sales.json'
import brand_anim from './animations/Brand.json'
import ux_anim from './animations/ux.json'


import "./header.css"
// const Header_content = (state) =>{
//   if (state===1)
//     return ( <h1><span style={{color:'#83C33F'}}>Digital Transformation</span><br/>
//     Connecting Your Business with Technology</h1>)
// }
const Header = () => {
  const [state,setState]=useState(0);
  return (
   
    <div className='innate-corp__header section__padding text-focus-in'>

      <div className='innate-corp__header-content '>
        <div className='innate-corp__header-content__Big__text focus-in-expand'>
        
          {state===0 &&<h1><br/><span style={{color:'#83C33F'}}>Digital Transformation</span><br/>
          <div className='h3'>Connecting Your Business with Technology</div></h1>}
          {state===1 && <h1><br/><span style={{color:'#83C33F'}}>Brand Consulting Services</span><br/>
          </h1>}
          {state===2 && <h1>Excellent <span style={{color:'#83C33F'}}>User Experience</span><br/>
          </h1>}
          {state===3 &&<h1><br/><span style={{color:'#83C33F'}}>Analytics</span><br/>
          for Branding</h1>}
          {state===4 && <h1><br/>Boost Your <span style={{color:'#83C33F'}}>Online Sales</span><br/>
          </h1>}
        </div>
        <p className='innate-corp__header-content__small__text'>
          {state===0 && <>We provide customized strategies based on business need for optimum growth.</>}
          {state===1 && <>We develop and manage solutions with proven techniques and tools</>}
          {state===2 && <>We offer Customer-centric designs to drive engagement</>}
          {state===3 && <>Generate better leads with our analytical services.</>}
          {state===4 && <>Hire the best team to reinvent sales and grow your online revenue</>}

        </p>
        {/* <img className='hvr-bob'src={services} alt="services we provide"/> */}
        <div className='interactive-tabs '>
          
          <img src={brand} className="BrandStrategy" alt="brand" onMouseOver={() => setState(1)} onMouseLeave={()=>setState(0)} />
          <img src={UX} className="UX"alt="UX"  onMouseEnter={() => setState(2)} onMouseLeave={()=>setState(0)}/>
          <img src={analytics} className="Analytics"alt="analytics"  onMouseEnter={() => setState(3)} onMouseLeave={()=>setState(0)} />
          <img src={sales} className="Sales"alt="sales" onMouseEnter={() => setState(4)} onMouseLeave={()=>setState(0)}/>
          {/* console.log(setState[0]); */}
        </div>
      </div>
      <div className='innate-corp__header-image focus-in-expand'>
        {state===0 &&<img src={svg} alt="header display" />}
        {state===1 &&< Lottie animationData={brand_anim} alt="brand animation"/>}
        {state===2 &&<Lottie  animationData ={ux_anim} />}
        {state===3 && <Lottie  animationData ={Analytics_animation} />}
        {state===4 && <Lottie  animationData ={Sales_anim} />}

        
      </div>

    </div>
  )
}

export default Header
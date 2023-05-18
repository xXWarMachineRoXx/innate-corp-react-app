import React from 'react';

// import {Footer,Blog,Header} from './container';
import {Footer,Header} from './container';

import { UX,Brand,Navbar,Analytics} from './components';
import brand_animation from "./components/brand/sunflower.json"
// import Ux_anim from "./assets/animations/lf30_editor_uytlkoma.json"
import analytics_anim from "./assets/animations/Analytics.json"
import Ux_anim from './assets/animations/UX.json'
import Sales_anim from './assets/animations/sales.json'
import "./App.css"
import Sales from './components/Sales/Sales';
// import FooterForm from './components/FooterForm/FooterForm'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand  buttonText="Learn More" animation={brand_animation}/>
        
        <UX buttonText="Learn More" animation={Ux_anim}/>
        <Analytics buttonText="Learn More" animation={analytics_anim}/>
        <Sales buttonText="Learn More" animation={Sales_anim}/>
        <Footer/>
    </div>
      
  )
}

export default App
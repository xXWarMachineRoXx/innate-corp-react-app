import React,{useState} from 'react'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home" className='hover-underline-animation'>Brand Strategy</a></p>
    <p><a href="#winnate-corp" className='hover-underline-animation'>User Experience</a></p>
    <p><a href="#possibility" className='hover-underline-animation'>Analytics</a></p>
    <p><a href="#features" className='hover-underline-animation'>Online Sales</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu]= useState(false);
  return (
    <div className='innate-corp__navbar'>
         <div className='innate-corp__navbar-link_logo '>
          <a href='/'><img src='./images/logo_512.svg' alt="logo"/></a>
         
          
        </div>
      
        <a href='/'><h1>Innate Corp</h1></a>
      <div className='innate-corp__navbar-links'>
        <div className='innate-corp__navbar-links_container '>
          < Menu />
        </div>
      </div > 
      
      <div className="innate-corp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="innate-corp__navbar-menu_container slide-bottom">
          <div className="innate-corp__navbar-menu_container-links">
            <Menu/> 
            
          </div>
          
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar
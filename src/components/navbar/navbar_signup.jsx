import React,{useState} from 'react'
import logo from './logo_512.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const menuNav = () => (
  <>
    <p><a href="#home">Brand Strategy</a></p>
    <p><a href="#winnate-corp">User Experience</a></p>
    <p><a href="#possibility">Analytics</a></p>
    <p><a href="#features">Online Sales</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu]= useState(false);
  return (
    <div className='innate-corp__navbar'>
      <div className='innate-corp__navbar-links'>
        <div className='innate-corp__navbar-link_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='innate-corp__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#winnate-corp">User Experience</a></p>
          <p><a href="#possibility">Analytics</a></p>
          <p><a href="#features">Online Sales</a></p>
          < menuNav />
        </div>
      </div >
      <div className="innate-corp__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="innate-corp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="innate-corp__navbar-menu_container scale-up-center">
          <div className="innate-corp__navbar-menu_container-links">
            <menuNav/> 
            <p><a href="#home">Home</a></p>
          </div>
          <div className="innate-corp__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar
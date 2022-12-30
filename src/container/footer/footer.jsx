import React from 'react';
import FooterForm from '../../components/FooterForm/FooterForm';
import "./footer.css";
import facebookLogo from "./images/Facebook-logo.png";
import instagramLogo from "./images/Instagram-logo.png";
import linkedInLogo from "./images/LinkedIn-logo.png";
import emailIcon from "./icons/Email.png"
import houseIcon from "./icons/House.png"
import phoneIcon from "./icons/Phone.png"


const footer = () => {
  return (
    <div className='innate-corp__Footer-container '>
      <div className='innate-corp__Footer-container-Form'>
      <FooterForm/>
      </div>
      <div className='innate-corp__Footer-container__Socials-Top-Bar'>
      <strong>Get connected with us on social networks</strong>
      </div>
      <div className='innate-corp__Footer-container__Bottom-box section__padding'>
        <div className='innate-corp__Footer-container__Bottom-box__content'>
          <div className='innate-corp__Footer-container__Bottom-box__col-1'>
            <img src="./images/logo_512.svg" alt="innate logo"/>
            <h1>Innate Corp</h1>
            <p>We develop custom social media plans for organizations to promote their online presence.</p>
            <div className='innate-corp__Footer-container__Bottom-box__col-1__img'>
              <img src={facebookLogo} alt="facebook-logo"/>
              <img src={instagramLogo} alt="facebook-logo"/>
              <img src={linkedInLogo} alt="facebook-logo"/>
            </div>
          </div>
          <div className='innate-corp__Footer-container__Bottom-box__col-2'>
              <h3><strong>Services</strong></h3>
              <a href='#Brand Strategy'>Brand Strategy</a>
              <a href='#User Experience'>UX</a>
              <a href='#Analytics'>Analytics</a>
              <a href='#Online Sales'>Online Sales</a>
          </div>
          <div className='innate-corp__Footer-container__Bottom-box__col-3'>
              <h3><strong>Useful links</strong></h3>
              <a href='#Brand Strategy'>Our Approach</a>
              <a href='#Brand Strategy'>Testimonials</a>
              <a href='#Brand Strategy'>Past Work</a>
              <a href='#Brand Strategy'>Leave feedback</a>
          </div>
          <div className='innate-corp__Footer-container__Bottom-box__col-4'>
              <h3><strong>Contact</strong></h3>
              <a href='https://goo.gl/maps/LzkMP6xZ5EvcgtWW7' target="__blank"><img src={houseIcon} alt="facebook-logo"/>&nbsp;&nbsp;10th Floor , Spaze ITech Park</a>
              <a href='mailto:support@innatecorp.com'><img src={emailIcon} alt="facebook-logo"/>&nbsp;&nbsp;support@innatecorp.com</a>
              <a href='tel:+919311407779'><img src={phoneIcon} alt="facebook-logo"/>&nbsp;&nbsp;+91 9311407779</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default footer   
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../img/logo-sin-fondo.png';
import $ from 'jquery';

export const HeaderNav = () => {
  
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);
  const [isMobileOrBigger, setIsMobileOrBigger] = useState(window.innerWidth >= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    if (!isMobileOrBigger) {
      setIsVisible(!isVisible);
    }
  };
// useEffect para que el menu se quite si tocas fuera del nav
useEffect(() => {
  const handleBodyInteraction = (event) => {
    if (!event.target.closest('.low-header') && isVisible) {
      setIsVisible(false);
    }
  };

  if (!isMobileOrBigger) {
    document.body.addEventListener('click', handleBodyInteraction);
    document.body.addEventListener('touchstart', handleBodyInteraction);
    document.body.addEventListener('touchmove', handleBodyInteraction);

    return () => {
      document.body.removeEventListener('click', handleBodyInteraction);
      document.body.removeEventListener('touchstart', handleBodyInteraction);
      document.body.removeEventListener('touchmove', handleBodyInteraction);
    };
  }
}, [isVisible, isMobileOrBigger]);
// useEffect para que el menu (ul) tenga los estilos en (true) 
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrBigger(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
// useEffect para saber si se movio la pantalla los 50px y asi hacer el efecto del margen en el ul
//  este us effect se usa junto con el estado de "isMobileOrBigger " para poder aplicar los efectos
// solo cuando es mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const ulStyles = isVisible ? {
    transform: 'translateX(0)',
    opacity: '1',
    visibility: 'visible',
    height: 'auto'
  } : {
    transform: 'translateX(500px)',
    opacity: '0',
    visibility: 'hidden',
    height: '0'
  };
  let marginTopValue;
  if (window.innerWidth <= 480) { // Teléfono
    marginTopValue = '-100px';
  } else if (window.innerWidth <= 768) { // Tablet
    marginTopValue = '0px';
  } else { // Computadora
    marginTopValue = '0px';
  }

  const lowHeaderStyles =  isScrolled ? {
    marginTop: marginTopValue,
    transition: 'margin-top 300ms'
  } : {
    transition: 'margin-top 300ms'
  };

  const manejarClick = () => {
      window.scrollTo(0, 0);
  };

  return (
    <header className='header'>

      <div className='top-header'>
        <ul>
          <li><a href='tel:+13238865593'>Phone: +1 (323) 886-5593</a></li>
          <li><a href='mailto:jlcodecrafters@gmail.com' >jlcodecrafters@gmail.com</a></li>
          <li><a target='_blanck' href='https://maps.app.goo.gl/YZ2KWuPvxUFS9AcU7'>Service Zone</a></li>
        </ul>
      </div>


      <div className='low-header'  style={lowHeaderStyles} >

          <div className='logo'>
              <Link to='/'>
                <img src={Logo} alt='logo-img' />
                <h3>CodeCrafters</h3>
              </Link>
          <FontAwesomeIcon icon={faBars}  onClick={handleClick}  />
          </div>
          <nav>
          <ul style={ulStyles}>
              <li><NavLink to='/home' className={({isActive})=> isActive? "active" : ""} onClick={manejarClick} >Home</NavLink></li>
              <li><NavLink to='/about' className={({isActive})=> isActive? "active" : ""} onClick={manejarClick} >About Us</NavLink></li>
              <li><NavLink to='/contact' className={({isActive})=> isActive? "active" : ""} onClick={manejarClick} >Contact</NavLink></li>
              <li><NavLink to='/skills' className={({isActive})=> isActive? "active" : ""} onClick={manejarClick} >Skills</NavLink></li>
              <li><NavLink to='/service' className={({isActive})=> isActive? "active" : ""} onClick={manejarClick} >Service</NavLink></li>
          </ul>
          </nav>

      </div>
        
    </header>
  )
}

$(document).ready(function() {
  $(".header .low-header nav ul li").on("touchstart", function() {
    $(this).addClass("hover-efecto");
  });

  $(".header .low-header nav ul li").on("touchend", function() {
    $(this).removeClass("hover-efecto");
  });
});
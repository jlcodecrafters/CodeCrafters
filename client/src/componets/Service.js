import React, { useEffect } from 'react';
import '../styles/service.css';
import IndividualIntervals from './helpers/IndividualIntervals';
import $ from 'jquery';
import { Helmet } from 'react-helmet';
import FirstImg from '../img/img_first_ca.jpg';
import SecondImg from '../img/img_sec_ca.jpg';
import ThirdImg from '../img/img_third_ca.jpg';
import FourthImg from '../img/img_fourth_ca.jpg';
import FifthImg from '../img/img_fifth_ca.jpg';
import SixthImg from '../img/img_sixth_ca.jpg';
import Seventh from '../img/img_seventh_ca.jpg';

export const Service = () => {
  
  // hover mobile
  useEffect(() => {
    function handleTouch() {
      if (window.innerWidth <= 1024) {
        $(".service h1").on("touchstart", function() {
          $(this).addClass("h1-hover-mobile2");
          $(this).removeClass("h");
        });

        $(".service h1").on("touchend", function() {
          $(this).removeClass("h1-hover-mobile2");
          $(this).addClass("h");
        });
      } else {
        $(".service h1").off("touchstart touchend");
      }
    }

    handleTouch(); // Llama a la función cuando se carga el componente

    window.addEventListener('resize', handleTouch); // Llama a la función cuando se cambia el tamaño de la ventana

    // Limpia el evento cuando se desmonta el componente
    return () => {
      window.removeEventListener('resize', handleTouch);
    }
  }, []);

  // Preload images
  useEffect(() => {
    const imageSources = [
      FirstImg,
      SecondImg,
      ThirdImg,
      FourthImg,
      FifthImg,
      SixthImg,
      Seventh
    ];

    const loadImage = src =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });

    Promise.all(imageSources.map(loadImage))
      .then(() => console.log("Images preloaded!"))
      .catch(err => console.error("Failed to preload images", err));
  }, []);

  return (
    <div className='page page-service'>
      <Helmet>
        <title>JL CodeCrafters/ Service</title>
        <link rel='canonical' href='https://www.jlcodecrafters.com/service' />
      </Helmet>

      <div className='service'>
        <h1 className='TextAcenter h'>Boost Your Business with Our Digital Services.</h1>
        <div className='carrusel'>
          <IndividualIntervals/>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react';
import '../styles/service.css';
import IndividualIntervals from './helpers/IndividualIntervals';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

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

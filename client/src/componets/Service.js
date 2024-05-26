import React, { useEffect } from 'react';
import '../styles/service.css';
import IndividualIntervals from './helpers/IndividualIntervals';
import $ from 'jquery';

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

      <div className='service'>

<<<<<<< HEAD
        <h1 className='TextAcenter h'>Boost Your Business with Our Digital Services.</h1>
=======
        <h1 className='TextAcenter h'>Impulsa Tu Negocio con Nuestros Servicios Digitales</h1>
>>>>>>> 4b56d8a6b445406ff1a3315a7f6f0ed4afee1ccb
        <div className='carrusel'>
          <IndividualIntervals/>
        </div>
        

      </div>
    </div>
  )
}

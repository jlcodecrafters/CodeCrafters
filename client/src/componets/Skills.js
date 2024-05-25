import React, { useEffect } from 'react';
import '../styles/skills.css';
import Button from './helpers/Button';
import $ from 'jquery';


export const Skills = () => {

  // hover mobile
    useEffect(() => {
      function handleTouch() {
        if (window.innerWidth <= 1024) {
          $(".skills h1").on("touchstart", function() {
            $(this).addClass("h1-hover-mobile2");
            $(this).removeClass("h");
          });

          $(".skills h1").on("touchend", function() {
            $(this).removeClass("h1-hover-mobile2");
            $(this).addClass("h");
          });
        } else {
          $(".skills h1").off("touchstart touchend");
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
    <div className='page page-s'>
      <div className='skills'>
        {/* agregar un apartado para las habilidades de google maps y doordash appi */}
        <h1 className='TextAcenter h'>Descubre la interactividad a tu alcance con solo un clic</h1>
        <p className='TextAcenter'>
          Te invitamos a experimentar nuestro botón dinámico a continuación,
          que no solo transforma su estilo sino también su contenido e intercambia entre Bootstrap y Chakra UI,
          adaptándose a tus preferencias en tiempo real. ¡No esperes más y ve el cambio en acción!
        </p>
        {/* boton dinamico que cambia entre frameworks */}
        <div className='skills-button'><Button/></div>
        
      </div>
      
    </div>
  )
}

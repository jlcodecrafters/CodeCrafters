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
        <h1 className='TextAcenter h'>Discover interactivity at your fingertips with just one click.</h1>
        <p className='TextAcenter'>
        We invite you to experience our dynamic button below, which not only transforms its style but also
         its content, switching between Bootstrap and Chakra UI, adapting to your preferences in real time.
          Don’t wait any longer and see the change in action!
        </p>
        {/* boton dinamico que cambia entre frameworks */}
        <div className='skills-button'><Button/></div>
        
      </div>
      
    </div>
  )
}

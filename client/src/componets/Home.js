import React, { useEffect } from 'react'
import '../styles/home.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faImages, faCode, faRocket, } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import {Helmet} from 'react-helmet';

export const Home = () => {

  // hover mobile
  useEffect(() => {
    function handleTouch() {
      if (window.innerWidth <= 1024) {
        // para la caja de home
        $(".page .anunciox1 ").on("touchstart", function(e) {
          $(this).addClass("hover-efecto-x1-div");
          $(this).removeClass("div-hover");
        });

        $(".page .anunciox1 ").on("touchend", function() {
          $(this).removeClass("hover-efecto-x1-div");
          $(this).addClass("div-hover");
        });
        // para los li  de home
        $(".page .anunciox4 ul li").on("touchstart", function(e) {
          $(this).addClass("hover-efecto-x4-li");
          $(this).removeClass("li-a");
        });

        $(".page .anunciox4 ul li").on("touchend", function() {
          $(this).removeClass("hover-efecto-x4-li");
          $(this).addClass("li-a");
        });
      } else {
        $(".page .anunciox4 ul li").off("touchstart touchmove touchend");
      }
    }

    handleTouch(); // Llama a la función cuando se carga el componente

    window.addEventListener('resize', handleTouch); // Llama a la función cuando se cambia el tamaño de la ventana

    // Limpia el evento cuando se desmonta el componente
    return () => {
      window.removeEventListener('resize', handleTouch);
    }
  }, []);

  // El resto de tu código de componente...

  return (

    <div className='page' >
      <Helmet>
        <title>JL Codecrafters/ Home</title>
        <link rel="canonical" href="https://www.jlcodecrafters.com/home" />
      </Helmet>

      <div className='anunciox1 div-hover '>
        <h1>Unprecedented User Experience</h1>
        
        <p>Explore innovation in user experience with our React.js solutions.
           Intuitive navigation and organic interaction await you.
            Discover the potential of your web applications on our 
            <Link to='/service'><button>services page</button></Link>
             or <Link to='/contact'><button>connect</button></Link>  
             directly with our team to start your project.</p>
        
      </div>
      <div className='anunciox4'>
          <h2 className='TextAcenter'>Turning Ideas into Reality</h2>
          <p className='TextAcenter'>
             In our company, we turn your ideas into high-quality digital solutions.
              Our development process is designed to ensure that every step is carried out
               with precision and efficiency. We invite you to explore how we do it.
          </p>
          <div className='list' >
            <ul>
              <li className='li-a'>
                <h3> <FontAwesomeIcon icon={faMagnifyingGlass}/> Evaluation</h3>
                <p>
                  We assess your needs and conduct a detailed analysis to fully understand your vision.
                   This process allows us to create custom solutions that align perfectly with your goals.
                </p>
              </li>

              <li className='li-a'>
                <h3> <FontAwesomeIcon icon={faImages} /> Prototyping </h3>
                <p>
                We create design prototypes based on your requirements.
                 This step allows us to visualize the final solution and make necessary adjustments before moving
                  on to the development phase.
                </p>
              </li>

              <li className='li-a'>
                <h3><FontAwesomeIcon icon={faCode} /> Development</h3>
                <p>
                We develop the prototype, conduct thorough testing, and prepare everything for deployment.
                 During this phase, we keep you informed with regular revisions to ensure that the final
                  product meets your expectations.
                </p>
              </li>

              <li className='li-a'>
                <h3><FontAwesomeIcon icon={faRocket} /> Publication </h3>
                <p>
                Once all revisions have been made and you are satisfied with the product,
                 we proceed to publish it on the web. Our goal is to ensure that your digital solution is
                  ready to impress your customers and exceed your business goals.
                </p>
              </li>

            </ul>
          </div>
      </div>
    </div>
  )
}

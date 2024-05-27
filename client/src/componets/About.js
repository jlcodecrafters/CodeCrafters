import React, { useEffect, useLayoutEffect, useRef } from 'react';
import '../styles/about.css';
import FirstImage from '../img/logo.svg';
import SecImage from '../img/img_sec_p.jpg';
import ThirdImage from '../img/img_third_p.jpg';
import FourthImage from '../img/img_fourth_p.jpg';
import FifthImage from '../img/img_fifth_p.jpg';
import MiCaja from './helpers/MiCaja';
import $ from 'jquery';

export const About = () => {

  const FirstImageRef = useRef();
  const SecImageRef = useRef();
  const ThirdImageRef = useRef();
  const FourthImageRef = useRef();
  const FifthImageRef = useRef();

  useLayoutEffect(() => {
    const loadImage = (src, ref) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ref.current.appendChild(img);
      };
    }; 

    loadImage(FirstImage, FirstImageRef);
    loadImage(SecImage, SecImageRef);
    loadImage(ThirdImage, ThirdImageRef);
    loadImage(FourthImage, FourthImageRef);
    loadImage(FifthImage, FifthImageRef);
  }, []);

   // hover mobile
   useEffect(() => {
    function handleTouch() {
      if (window.innerWidth <= 1024) {
        $(".about .TextAcenter").on("touchstart", function() {
          $(this).addClass("h1-hover-mobile");
        });

        $(".about .TextAcenter").on("touchend", function() {
          $(this).removeClass("h1-hover-mobile");
        });
      } else {
        $(".about .TextAcenter").off("touchstart touchend");
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
    <div className='page page-a'>

      <div className='about'>
          <h1 className='TextAcenter'>Innovating Web Development with React.js</h1>
          <MiCaja>
            <p className='TextAcenter'> <br/>
              Welcome to our company, where innovation and efficiency come together to create exceptional web experiences.
              As specialists in React.js, we are dedicated to creating interactive and efficient user interfaces for
                web applications. Our services range from web design to frontend and backend development,
                always with a focus on performance optimization.
            </p><br/>
              <div ref={FirstImageRef} className='f-img App-logo' />
          </MiCaja>
          <MiCaja>
            <p className='TextAcenter'><br/>
              We utilize cutting-edge technologies such as React.js, Redux, React Router, Webpack/Babel,
               and styled component libraries like Chakra UI and React Bootstrap.
                Our typical projects encompass single-page web applications (SPA),
                 content management systems (CMS), e-commerce platforms, and analytical dashboards.
            </p><br/>
            <div ref={SecImageRef} className='f-img sec-img' />
          </MiCaja>
          <MiCaja>
            <p className='TextAcenter'><br/>
              Our development process is grounded in a thorough analysis of requirements, design and prototyping,
               iterative development, testing and quality assurance, and deployment and maintenance.
                We work with a wide range of clients, from startups to large corporations,
                 and we take pride in being part of the community of companies that use React.js,
                  such as Facebook, Airbnb, Netflix, and Dropbox.
            </p><br/><br/>
            <div ref={ThirdImageRef} className='f-img third-img' />
          </MiCaja>
          <MiCaja>
            <p className='TextAcenter'><br/>
            Our corporate culture values innovation, collaboration, and continuous improvement.
             We foster a work environment where developers can experiment with new technologies
              and share knowledge.
            </p><br/>
            <div ref={FourthImageRef} className='f-img ' />
          </MiCaja>
          <MiCaja>
          <br/>
            <p className='TextAcenter'>
              If you’re looking for a web development company that stands
               out for its commitment to excellence and innovation, don’t hesitate to get in touch with
                us through our contact page. We’re here to help you bring your ideas to reality.
              </p><br/>
              <div ref={FifthImageRef} className='f-img fifth-img' />
              <br/>
          </MiCaja>
          
      </div>
        
    </div>
  )
}

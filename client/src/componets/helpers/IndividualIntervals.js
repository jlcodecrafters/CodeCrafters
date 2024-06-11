import Carousel from 'react-bootstrap/Carousel';
import FirstImg from '../../img/img_first_ca.jpg';
import SecondImg from '../../img/img_sec_ca.jpg';
import ThirdImg from '../../img/img_third_ca.jpg';
import FourthImg from '../../img/img_fourth_ca.jpg';
import FifthImg from '../../img/img_fifth_ca.jpg';
import SixthImg from '../../img/img_sixth_ca.jpg';
import Seventh from '../../img/img_seventh_ca.jpg';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
function IndividualIntervals() {

// carga de imagenes 

const [imagesLoaded, setImagesLoaded] = useState(false);

  useLayoutEffect(() => {
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
      .then(() => setImagesLoaded(true))
      .catch(err => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <div></div>; // se muestra mientras que se cargan las imagenes
  }

  return (
    <Carousel >
      <Carousel.Item interval={2500} >
        <img src={FirstImg} alt="First slide"/>
          <Carousel.Caption>
            <h3 className='h3-carrusel' >React Application Development: Building Dynamic and Modern User Experiences.</h3>
            <p >
            Our React applications are fast, responsive, and designed to scale with your business.
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item>
      
{/* dentro de Carousel.Item va interval={500} para modificar su intervalo de movimiento */}
      <Carousel.Item interval={2500} >
        <img src={SecondImg} alt="Second slide" />
          <Carousel.Caption>
            <h3 className='h3-carrusel'>MERN Application Creation: Leverage the power of the MERN stack for your project.</h3>
            <p >
            We develop robust and efficient<br/> applications using MongoDB, Express,<br/> React, and Node.js.
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500} >
        <img src={ThirdImg} alt="Third slide" />
          <Carousel.Caption>
            <h3 className='h3-carrusel'>React Upgrade: Keep your platform up-to-date with the latest technologies.</h3>
            <p >
              We transform your current systems into performance-optimized React applications.
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item interval={2500} >
        <img src={FourthImg} alt="Fourth slide" />
          <Carousel.Caption>
            <h3 className='h3-carrusel'>Integration with DoorDash and Uber Eats APIs expands your reach in delivery.</h3>
            <p >
              We connect your store with DoorDash<br/> and Uber Eats, simplifying order management<br/> and enhancing your customers’ satisfaction.
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item> */}

      <Carousel.Item interval={2500} >
        <img src={FifthImg} alt="Fifth slide" />
          <Carousel.Caption>
            <h3 className='h3-carrusel'>Connection with Google Maps API puts your business on the map of success.</h3>
            <p >
            We integrate Google Maps so that customers can easily find your store and increase your visibility...
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500} >
        <img src={SixthImg} alt="Sixth slide" />
          <Carousel.Caption>
            <h3 className='h3-carrusel'>Google Workspace Setup Enhances Your Team’s Collaboration and Productivity.</h3>
            <p className='p-carrusel'>
            We set up Google Workspace for you to enjoy business communication and management tools.
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500} >
        <img src={Seventh} alt="Seventh slide" />
          <Carousel.Caption>
            <h3 className='h3-carrusel'>Google Voice Implementation for Privacy and Communication.</h3>
            <p >
            Google Voice provides an exclusive number for privacy and secure communication, linkable to Google Workspace for efficient management.
            </p>
            <Link to='/contact' ><button className='button'>Contact</button></Link>
          </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default IndividualIntervals;
import React, { useEffect, useState } from 'react';
import '../styles/contact.css';
import $ from 'jquery';
import ReCAPTCHA from 'react-google-recaptcha';

export const Contact = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    function handleTouch() {
      if (window.innerWidth <= 1024) {
        $(".contact .h ").on("touchstart", function() {
          $(this).addClass("h1-hover-mobile2");
          $(this).removeClass("h");
        });

        $(".contact .h  ").on("touchend", function() {
          $(this).removeClass("h1-hover-mobile2");
          $(this).addClass("h");
        });
      } else {
        $(".contact .TextAcenter").off("touchstart touchend");
      }
    }

    handleTouch();

    window.addEventListener('resize', handleTouch);

    return () => {
      window.removeEventListener('resize', handleTouch);
    }
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Please verify that you are a human!");
      return;
    }

    const name = e.target.name.value.trim();
    const lastname = e.target.lastname.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message?.value.trim() || '';

    if (!name || !lastname || !phone || !email || !message) {
      alert("Por favor rellene el formulario antes de enviarlo.");
      return;
    }

    // Configura los parámetros de SMTPJS usando variables de entorno
    window.Email.send({
      Host: process.env.REACT_APP_SMTP_HOST,
      Username: process.env.REACT_APP_SMTP_USER,
      Password: process.env.REACT_APP_SMTP_PASSWORD,
      To: process.env.REACT_APP_EMAIL_TO,
      From: process.env.REACT_APP_SMTP_USER,
      Subject: "Mensaje de mi sitio web",
      Body: `Nombre: ${name}\nApellido: ${lastname}\nTeléfono: ${phone}\nEmail: ${email}\nMensaje: ${message}`
    }).then(
      (message) => {
        if (message === 'OK') {
          alert("Mensaje Enviado.");
          resetForm(e.target);
        } else {
          console.error('Error al enviar el correo:', message);
          alert("Mensaje fallido.");
        }
      }
    );
  }

  const resetForm = (form) => {
    form.name.value = '';
    form.lastname.value = '';
    form.phone.value = '';
    form.email.value = '';
    if (form.message) {
      form.message.value = '';
    }
  }

  const handleRecaptchaChange = (value) => {
    setIsVerified(!!value);
  }

  return (
    <div className='page page-c'>
      <div className='contact'>
        <h1 className='TextAcenter h'>React.js: Where Great Web Stories Begin</h1>
        <p className='TextAcenter'>
          Your story deserves to be told with the technological excellence we offer. Our team of React.js 
          specialists is ready to bring the next chapter of your digital triumph to life.
          Scroll down and use the form to start a conversation with us. Together,
          we will explore the heights your project can reach.
        </p>
      </div>

      <div className='form'>
        <h2>Contact Form</h2>
        <form onSubmit={formSubmit}>
          <input type='text' name='name' placeholder='Name' />
          <input type='text' name='lastname' placeholder='Last Name' />
          <input
            type='tel' name='phone' pattern="[0-9]{1,15}" 
            title='All characters have to be a number and there is a maximum of 11 characters'
            placeholder='Phone Number'
          />
          <input type='email' name='email' placeholder='Email' />
          <textarea name='message' placeholder='Your message'></textarea>
          <div className='recaptcha-container'>
            <ReCAPTCHA
              sitekey="6LeOlOYpAAAAAP4VQDHpwFaBzCZiYLq56kZkjzOQ"
              onChange={handleRecaptchaChange}
            />
          </div>
          <input type='submit' value='Enviar' disabled={!isVerified} />
        </form>
      </div>
    </div>
  )
}
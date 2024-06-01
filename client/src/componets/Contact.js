import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
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

    const name = DOMPurify.sanitize(e.target.name.value.trim());
    const lastname = DOMPurify.sanitize(e.target.lastname.value.trim());
    const phone = DOMPurify.sanitize(e.target.phone.value.trim());
    const email = DOMPurify.sanitize(e.target.email.value.trim());
    const message = DOMPurify.sanitize(e.target.message?.value.trim() || '');
    const projectDescription = DOMPurify.sanitize(e.target.project_description?.value.trim() || '');
    const tec = DOMPurify.sanitize(e.target.tec?.value.trim() || '');
    const limit = DOMPurify.sanitize(e.target.limit?.value.trim() || '');
    const budget = DOMPurify.sanitize(e.target.Budget?.value.trim() || '');
    const finalUser = DOMPurify.sanitize(e.target.final_user?.value.trim() || '');
    const specialRec = DOMPurify.sanitize(e.target.special_rec?.value.trim() || '');
    const integrations = DOMPurify.sanitize(e.target.integrations?.value.trim() || '');
    const maintenanceSupport = DOMPurify.sanitize(e.target.maintenance_support?.value.trim() || '');
    const ejemRef = DOMPurify.sanitize(e.target.ejem_ref?.value.trim() || '');

    if (!name || !lastname || !phone || !email || !message || !projectDescription || !tec || !limit || !budget || !finalUser || !specialRec || !integrations || !maintenanceSupport || !ejemRef) {
      alert("Please fill out the entire form before submitting.");
      return;
    }

    window.Email.send({
      SecureToken: "28bff358-63bf-47fb-a033-0e3fae72ed9c",
      To: 'jlcodecrafters@gmail.com',
      From: "contact@jlcodecrafters.com",
      Subject: "Mensaje de mi sitio web",
      Body: `
        Nombre: ${name}
        Apellido: ${lastname}
        Teléfono: ${phone}
        Email: ${email}
        Mensaje: ${message}
        Descripción del proyecto: ${projectDescription}
        Tecnología preferida: ${tec}
        Fecha límite: ${limit}
        Presupuesto estimado: ${budget}
        Usuarios finales: ${finalUser}
        Requisitos de accesibilidad: ${specialRec}
        Integraciones requeridas: ${integrations}
        Soporte de mantenimiento: ${maintenanceSupport}
        Ejemplos de referencia: ${ejemRef}
      `
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
    form.message.value = '';
    form.project_description.value = '';
    form.tec.value = '';
    form.limit.value = '';
    form.Budget.value = '';
    form.final_user.value = '';
    form.special_rec.value = '';
    form.integrations.value = '';
    form.maintenance_support.value = '';
    form.ejem_ref.value = '';
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
          <label>Please fill out the entire form before submitting.</label>
          <input type='text' name='name' placeholder='Name' />
          <input type='text' name='lastname' placeholder='Last Name' />
          <input
            type='tel' name='phone' pattern="[0-9]{1,15}" 
            title='All characters have to be a number and there is a maximum of 11 characters'
            placeholder='Phone Number'
          />
          <input type='email' name='email' placeholder='Email' />
          <textarea name='message' placeholder='Your message'></textarea>
          <textarea name='project_description' placeholder='Could you provide a detailed description of the project?'></textarea>
          <div className='recaptcha-container'>
          </div>
          <input type='text' name='tec' placeholder='Is there any specific technology or tool you would like to be used in the project?' />
          <input type='text' name='limit' placeholder='What is the deadline for the project completion?' />
          <input type='text' name='Budget' placeholder='What is your estimated budget for this project?' />
          <input type='text' name='final_user' placeholder='Who are the end users of this project?' />
          <input type='text' name='special_rec' placeholder='Are there specific accessibility or usability requirements that we need to be aware of?' />
          <input type='text' name='integrations' placeholder='Do you require integrations with other services or APIs?' />
          <input type='text' name='maintenance_support' placeholder='Do you require integrations with other services or APIs?' />
          <textarea name='ejem_ref' placeholder='Could you provide examples of websites or applications that you like and why?'></textarea>
          <ReCAPTCHA
              sitekey="6LeOlOYpAAAAAP4VQDHpwFaBzCZiYLq56kZkjzOQ"
              onChange={handleRecaptchaChange}
            />
          <input type='submit' value='Enviar' disabled={!isVerified} />
        </form>
      </div>
    </div>
  )
}

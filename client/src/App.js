import { MisRutas } from './router/MisRutas';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="layout">
      <Helmet>
        <title>JL CodeCrafters</title>
        <meta name="description"
              content="Especialistas en React.js, creamos interfaces eficientes e interactivas.
               Ofrecemos desarrollo de apps React y MERN, actualización a React, y conexión con APIs.
               Si buscas innovación en desarrollo web, contáctanos. ¡Estamos aquí para ayudarte!" 
         />
        <meta name="keywords"
             content="website development, web dev, web development,web site designs,
             web app with react, react, react website, react js website, node,  mern stack " />
      </Helmet>
      <MisRutas/>

    </div>
  );
}

export default App;

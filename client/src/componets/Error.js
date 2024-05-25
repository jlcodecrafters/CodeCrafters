import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/error.css';

export const Error = () => {
  return (
    <div className='page page-e'>
        <div className='error'>
            <h1 className='TextAcenter'>Error: Esta pagina NO EXISTE</h1>
            <button><Link to='/' >Click para volver al Home</Link></button>
            
        </div>
    </div>
  )
}

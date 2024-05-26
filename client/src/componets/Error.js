import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/error.css';

export const Error = () => {
  return (
    <div className='page page-e'>
        <div className='error'>
            <h1 className='TextAcenter'>Error: This page DOES NOT EXIST.</h1>
            <button><Link to='/' >Click to return to Home.</Link></button>
            
        </div>
    </div>
  )
}

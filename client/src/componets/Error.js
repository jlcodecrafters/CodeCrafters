import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.css';
import { Helmet } from 'react-helmet';

export const Error = () => {
  return (
    <div className='page page-e'>
      <Helmet>
        <title>JL Codecrafters/ Error 404</title>
        <link rel='canonical' href='https://www.jlcodecrafters.com/404' />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className='error'>
        <h1 className='TextAcenter'>Error: This page DOES NOT EXIST.</h1>
        <button>
          <Link to='/'>Click to return to Home.</Link>
        </button>
      </div>
    </div>
  )
}

import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { Home } from '../componets/Home';
import { About } from '../componets/About';
import { Contact } from '../componets/Contact';
import { Skills } from '../componets/Skills';
import { Work } from '../componets/Work';
import {Service} from '../componets/Service';
import { HeaderNav } from '../componets/layout/HeaderNav';
import { Footer } from '../componets/layout/Footer';
import { Error } from '../componets/Error';

export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
          <HeaderNav/>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />}  />
            <Route path='/home' element={<Home/>}  />
            <Route path='/service' element={<Service/>}  />
            <Route path='/about' element={ <About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/work' element={<Work/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
          <Footer/>
        
        </BrowserRouter>
    </div>
  )
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import EstruturaEnderecoPage from './routes/EstruturaEnderecoPage'
import PropostaPage from './routes/PropostaPage'
import ContactPage from './routes/ContactPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<EstruturaEnderecoPage />} />
      <Route path='/proposta' element={<PropostaPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
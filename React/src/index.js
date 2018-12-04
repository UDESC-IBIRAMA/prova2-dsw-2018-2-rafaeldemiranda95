import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './Rotas';
import './App.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Rotas />
  </BrowserRouter>,
  document.getElementById('root')
);

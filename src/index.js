import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <div className='main_contain'>
  <BrowserRouter>
  <App />
  </BrowserRouter>    
  </div>,
  document.getElementById('root')
);



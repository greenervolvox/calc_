import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './global'; // Corrigir a importação de './global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <createGlobalStyle />
    <App />
  </React.StrictMode>
);


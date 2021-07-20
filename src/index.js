import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadCliente from './components/CadCliente';
import CadProduto from './components/CadProduto';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <CadCliente />
    <CadProduto />
  </React.StrictMode>,
  document.getElementById('root')
);

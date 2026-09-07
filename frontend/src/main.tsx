import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js';
//import './index.css';  Asi no se importa en .tsx
// tsc: typescript compiler

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ClientsContextProvider } from './context/ClientContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <ClientsContextProvider>
      <App />
    </ClientsContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);


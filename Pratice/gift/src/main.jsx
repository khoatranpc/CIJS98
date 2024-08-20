import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StoreProvider from './Store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <App />
  </StoreProvider>
)

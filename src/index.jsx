import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OscuroProvider from './Context/ModoOscuroContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OscuroProvider>
    <App/>
    </OscuroProvider>
    
  </React.StrictMode>
);



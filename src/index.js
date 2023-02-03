import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
    <App />
    </div>
  </React.StrictMode>
);


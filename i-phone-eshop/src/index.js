import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './components/Context'
import Navigation from './components/Header';
import {BrowserRouter, Router, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      <BrowserRouter>
      
      </BrowserRouter>

    </ContextProvider>
);

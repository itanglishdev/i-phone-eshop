import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './components/Context'
import Navigation from './components/Header';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
    
      </BrowserRouter>

    </ContextProvider>
);

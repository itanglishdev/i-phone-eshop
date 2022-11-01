import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './components/Context'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from './components/Header'
import Categories from './components/Categories'
import Deals from './components/Deals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      <BrowserRouter>

      <Header/>
      <Routes>
        <Route  path='/' element={<App/>}/>
        <Route  path='/categories' element={<Categories/>}/>
        <Route  path='/deals' element={<Deals/>}/>


      </Routes>
    
      </BrowserRouter>

    </ContextProvider>
);

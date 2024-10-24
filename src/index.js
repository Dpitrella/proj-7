import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos'
import Error from './pages/Error/Error'
import Logement from './pages/Logement/Logement'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/apropos' element={<Apropos />} />
      <Route path='/logement/:id' element={<Logement />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


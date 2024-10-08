import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Error404 from './pages/Error404'
import Logement from './pages/Logement'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Apropos' element={<Apropos />} />
      <Route path='Logement' element={<Logement />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


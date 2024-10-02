import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/logos/logo.png'

import '../Header/Header.css'
function Header() {
    const pathname = useLocation().pathname;
    return (
      <header>
        <Link to="/">
          <img id="header-logo" src={Logo} alt="Logo Kasa" />
        </Link>
  
        <nav>
          
          <Link
            className={`${pathname === "/" ? "nav-link-active" : "nav-link"}`}
            to="/">
            Accueil
          </Link>
  
          <Link
            className={`${pathname === "/apropos" ? "nav-link-active" : "nav-link"}`}
            to="/apropos">
            A Propos
          </Link>
          
        </nav>
      </header>
    );
  }
  
  export default Header;
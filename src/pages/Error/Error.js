import React from "react";
import './Error.css'
import { Link } from 'react-router-dom';

function Error404() {
    return(
        <div className="error-content">
            <h2>404</h2>
            <p className="text-content">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" id="home">  Retourner sur la page d’accueil </Link>
        </div>
        
    )
}

export default Error404
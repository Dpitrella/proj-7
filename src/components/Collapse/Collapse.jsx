import React, { useState } from "react";
import './Collapse.css';

function Collapse({ text, title }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-container">
            <summary className="about-title" onClick={toggleCollapse}>
                <p className="title">{title}</p>
                <i className={`fa-solid fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
            </summary>
            <div className="footer-colapse">
                <div className={`about-text ${isOpen ? 'open' : ''}`}>
                    {text}
                </div>
            </div>

        </div>
    );
}

export default Collapse;
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
                {title} 
                <i className={`fa-solid fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
            </summary>

            <div className={`about-text ${isOpen ? 'open' : ''}`}>
                {text}
            </div>
        </div>
    );
}

export default Collapse;
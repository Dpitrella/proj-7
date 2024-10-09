import React, { useEffect, useState } from 'react';
import './Slide.css'
function Slide({ pictures }) {
    const [setItems] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/bdd.json"); 
                
                if (!response.ok) {
                    throw new Error('Error');
                }
                const data = await response.json();
                setItems(data); 
                
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, []);

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
        <section id="gallery"> 
            {pictures.length > 1 && (
                <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
            )}
            {pictures.length > 1 && (
                <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
            )}

            {pictures.map((img, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img
                                src={img}
                                alt="Photos du logement"
                                className="gallery-image"
                            />
                        )}
                        {index === current && (
                            <span className="gallery-image-number">
                                {current + 1}/{pictures.length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Slide;
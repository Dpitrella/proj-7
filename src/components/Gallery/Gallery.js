import React, { useEffect, useState } from 'react';
import './Gallery.css';

function Gallery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/bdd.json'); // Asegúrate de que bdd.json esté en la carpeta public
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const data = await response.json();
                setItems(data); // Asumiendo que data es un array
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="gallery-content">
            <div className="article-grid">
                {items.map((item) => (
                    <a href='#'>
                        <div key={item.id} className="article-item">
                        <img src={item.cover} alt={item.title} />
                        <h2>{item.title}</h2>
                        
                    </div>
                    </a>
                    
                ))}
            </div>
        </div>
    );
}

export default Gallery;

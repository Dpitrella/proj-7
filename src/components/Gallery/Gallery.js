import React, { useEffect, useState } from 'react';
import './Gallery.css';

function Gallery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json', {
                    mode: 'no-cors'
                });                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json(); // Asegúrate de que el archivo sea JSON
                setItems(data); // Asumiendo que data es un array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='gallery-content'>
            <div className='article-grid'>
                {items.map(item => (
                    <div key={item.id} className='article-item'>
                        {/* Elimina la imagen si no la necesitas, o ajusta su estilo */}
                        {/* <img src={item.cover} alt={item.title} /> */}
                        <h2>{item.title}</h2>
                        {/* Puedes eliminar el texto adicional */}
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Gallery;
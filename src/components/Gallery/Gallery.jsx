import React, { useEffect, useState } from 'react';
import '../Gallery/Gallery.css';

function Gallery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/bdd.json"); 
                console.log(response)
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const data = await response.json();
                console.log(data);
                
                setItems(data); 
            } catch (error) {
            console.log(error)    
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
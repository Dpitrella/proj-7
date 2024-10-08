import React, { useEffect, useState } from 'react';
import '../Gallery/Gallery.css';

function Gallery() {
    const [items, setItems] = useState([]);

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

    return (
        <div className="gallery-content">
            <div className="article-grid">
                {items.map((item) => (
                    
                    <a key={item.id} href='#'> 
                        <div className="article-item">
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
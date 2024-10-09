import React, { useEffect, useState } from 'react';
import '../Gallery/Gallery.css';
import { Link } from 'react-router-dom';

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
                 <Link key={item.id} to={`/logement/${item.id}`}>
                     <div className="article-item">
                            <img src={item.cover} alt={item.title} />
                            <h2>{item.title}</h2>
                        </div>
                 </Link>
                       
                    
                ))}
            </div>
        </div>
    );
}

export default Gallery;
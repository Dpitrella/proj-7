import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slide from '../../components/Slideshow/Slide';

function Logement() {
    const [logement, setLogement] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/bdd.json");
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                const data = await response.json();
                const selectedLogement = data.find(item => item.id === id);
                setLogement(selectedLogement);
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, [id]);

    if (!logement) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Slide pictures={logement.pictures} />
            
        </div>
    );
}

export default Logement;
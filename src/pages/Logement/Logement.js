import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slide from '../../components/Slideshow/Slide';
import Collapse from '../../components/Collapse/Collapse';
import Tags from '../../components/Tags/tags';
import Rating from '../../components/Rating/Rating';
import './Logement.css'
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
        return <div>Error</div>;
    }
    const { title, location, tags, host, rating, description, equipments, } = logement;
    const range = [1, 2, 3, 4, 5];


    return (
        <div className='logement-content'>

            <Slide pictures={logement.pictures} />
            <div id='intro'>
                <h1 id='intro-title'>{title}</h1>
                <h2 id='intro-location'>{location}</h2>
                <Tags tags={tags} />
            </div>



            <Rating rating={rating} range={range} />
            <div id='host-info'>
                <p id='host-name'>{host.name}</p>
                <img id='host-info-picture' src={host.picture} alt='{host.name}' />

            </div>

            <div id='logement-info'>
                <Collapse
                    text={description}
                    title="Description"
                />
                <Collapse
                    title="Equipment"
                    text={
                        <ul>
                            {equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>

                    }
                />
            </div>
        </div>


    );
}

export default Logement;
import React, { useEffect, useState } from 'react';

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
    <div>

    </div>
)

export default Slide 
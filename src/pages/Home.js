import React from 'react';
import { Link } from 'react-router-dom';

import Gallery from '../components/Gallery/Gallery'
import Banner from '../components/Banner/Banner'




function Home() {

  return (
   <main>
    <div>
      <Banner />
    </div>
    <div className='divGall'>
      <Gallery />
    </div>
    
   </main>
      
    
  );
}

export default Home;

import React from 'react';
import Gallery from '../components/Gallery/Gallery'
import Banner from '../components/Banner/Banner'
import '../styles/App.css';

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

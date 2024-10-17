import React from 'react';
import Gallery from '../../components/Gallery/Gallery'
import Banner from '../../components/Banner/Banner'
import imgHome from '../../assets/bannerHome/IMG.png'



function Home() {

  return (
   <main>
    <div className='Bann'>
      <Banner imgSrc={imgHome}
        texte="Chez vous, partout et ailleurs"
       />
    </div>
    <div className='divGall'>
      
      <Gallery />
    </div>
    
   </main>
      
    
  );
}

export default Home;

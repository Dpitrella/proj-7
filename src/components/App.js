

import Gallery from './Gallery/Gallery'
import Header from './header/Header';
import Banner from '../components/Banner/Banner'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='Banner'>
        <Banner />
      </div>
      <div className='divGall' >
        <Gallery />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.png'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='KASA logo' />
            <div className='pages-head'>
            <a className='accueil' src="#"> Accueil</a>
            <a className='aPropos' src="#"> A Propos</a>
            </div>
           
        </div>
    )

}

export default Header 

import logo from '../../assets/logos/LOGO (1).png'
import '../Footer/footer.css'

function Footer() {
    return (
        <div className='footer-content'>
            <img src={logo} alt='logo Footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
import img from '../../assets/banerApropos/Image source 2.png'
import '../Banner/Banner.css'

function BannerApropos() {
    return(
        <div className='banner-content'>
            <div className='banner-img'>
            <img src={img} alt='image nature, Banner.' />
            </div>
            
        </div>
    )

}
export default BannerApropos
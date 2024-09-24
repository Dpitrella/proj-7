import imgBanner from './IMG.png'
import './Banner.css'
function Banner() {
    return (
        <div className='banner-content'>
            <div className='banner-img'>
            <img src={imgBanner} alt='image nature, Banner.' />
            </div>
            <div className='banner-txt'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner
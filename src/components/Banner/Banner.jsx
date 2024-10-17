
import './Banner.css';

function Banner({ imgSrc, texte } ) {
    return (
        <div className='banner-content'>
            <div className='banner-img'>
                <img src={imgSrc} alt='image nature. Banner' />
            </div>
            <div className='banner-txt'>
                <h1>{texte}</h1>
            </div>
        </div>
    );
}

export default Banner;
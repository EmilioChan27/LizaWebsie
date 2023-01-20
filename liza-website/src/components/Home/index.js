import './index.scss'
import webPhoto from '../../assets/images/web_photo.avif'
import computerPhoto from '../../assets/images/computer_on_desk.avif'
import wifiPhoto from '../../assets/images/wifi_connected.avif'
import hackerPhoto from '../../assets/images/hacker_photo.avif'
const Home = () => {
    return (
        <>
        <hr></hr>
        <div id='container' className='container home-page'>
            <div id="slider" className='container-child slideshow'>
                <figure>
                    <img src={webPhoto} />
                    <img src={computerPhoto} />
                    <img src={wifiPhoto} />
                    <img src={hackerPhoto} />
                    <img src={webPhoto} />
                </figure>
            </div>
            <div className='container-child'>
                <h1 className='home-text title'> New Artwork:-title of new artwork- </h1>
                <p className='home-text'> 
                    This is a paragraph describing the new artwork - 
                    what the inspiration was, what the repercussions 
                    are for the new art world, and how Liza plans to
                    build off of the successes of this launch in the future
                </p>
            </div>
        </div>
        <hr></hr>
        <div className='footer'>

        </div>
        <h1> Hello! </h1>
        </>
    );
}

export default Home
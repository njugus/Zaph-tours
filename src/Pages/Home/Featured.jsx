import mtkenya from '../../assets/Mt Kenya.jpg'
import mtruwenzori from '../../assets/Mt Ruwenzori.jpg'
import lakenaks from '../../assets/Lake Nakuru.jpg'
import tsavo from '../../assets/Tsavo.jpg'
import naipark from '../../assets/Nairobi National Park.jpg'
import coast from '../../assets/Coastal Kenya.jpg'
import './Featured.css'

function Featured() {
    return (
        <>
        <section className='featured-heading'>
        <h1>Featured Destinations</h1>
        </section>
        <section className="featured-destinations">
            
            <div className="destination-wrapper">
                <div className="destination-image">
                    <img src={mtkenya} alt='The image of mt kenya' className='featured-img'/>
                </div>

                <div className="destination-description">
                <h2 className='dest-heading'>Mt Kenya</h2>
                    <p className='dest-para'> 
                    
                    Mount Kenya, Africa’s second-highest peak, rises to 5,199 meters (17,057 feet) and offers stunning 
                    views and diverse landscapes. 
                    </p>

                </div>

                <div className="description-price">
                    <h2>Prices: sh3500</h2>

                </div>
            </div>

            <div className="destination-wrapper">
                <div className="destination-image">
                    <img src={mtruwenzori} alt='The image of mt Ruwenzori' className='ruwenzori-featured-img'/>
                </div>

                <div className="destination-description">
                <h2 className='dest-heading'>Mt Ruwenzori</h2>
                    <p className='dest-para'> 
                      Experience the awe-inspiring beauty of Mount Ruwenzori, 
                      where snow-capped peaks meet lush rainforests in Africa's mystical Mountains of the Moon.
                    </p>

                </div>

                <div className="description-price">
                    <h2>Prices: sh3500</h2>

                </div>
            </div>


            <div className="destination-wrapper">
                <div className="destination-image">
                    <img src={lakenaks} alt='The image of lake nakuru' className='featured-img'/>
                </div>

                <div className="destination-description">
                <h2 className='dest-heading'>Lake Nakuru</h2>
                    <p className='dest-para'> 
                     Discover the enchanting beauty of Lake Nakuru, a shimmering oasis teeming with flamingos and
                     breathtaking wildlife.
                    </p>

                </div>

                <div className="description-price">
                    <h2>Prices: sh3500</h2>

                </div>
            </div>

            <div className="destination-wrapper">
                <div className="destination-image">
                    <img src={tsavo} alt='The image of Tsavo National Park' className='featured-img'/>
                </div>

                <div className="destination-description">
                <h2 className='dest-heading'>Tsavo National Park</h2>
                    <p className='dest-para'> 
                    Explore the wild wonders of Tsavo National Park, where vast savannas teem with
                     majestic elephants and roaring lions.
                    </p>

                </div>

                <div className="description-price">
                    <h2>Prices: sh3500</h2>

                </div>
            </div>

            <div className="destination-wrapper">
                <div className="destination-image">
                    <img src={naipark} alt='The image of Nairobi national park' className='featured-img'/>
                </div>

                <div className="destination-description">
                <h2 className='dest-heading'>Nairobi National Park</h2>
                    <p className='dest-para'> 
                    Discover Nairobi National Park, where wild adventures await just minutes from the city!
                    </p>

                </div>

                <div className="description-price">
                    <h2>Prices: sh3500</h2>

                </div>
            </div>

            <div className="destination-wrapper">
                <div className="destination-image">
                    <img src={mtkenya} alt='The image of mt kenya' className='featured-img'/>
                </div>

                <div className="destination-description">
                <h2 className='dest-heading'>Coastal Kenya</h2>
                    <p className='dest-para'> 
                    Unwind on the pristine beaches of Coastal Kenya, where turquoise waters 
                    meet golden sands and vibrant coral reefs.
                    </p>

                </div>

                <div className="description-price">
                    <h2>Prices: sh3500</h2>

                </div>
            </div>

        </section>
        </>
    )
}

export default Featured;
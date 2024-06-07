import about from '../../assets/tours graffiti.jpeg'
import './About.css';

function About(){
    return(
        <section className="about-section">
            <div className="about-description">
            <h1 className='about-heading'>About Us</h1> 
                <p>

                   Welcome to Zaph Tours, your gateway to unforgettable safaris and adventure 
                   tours in the heart of Kenya. Established with a passion for exploration and
                   a deep love for nature, Zaph Tours is dedicated to providing premier 
                   travel experiences that capture the essence of Africa's wilderness and cultural heritage.
                   As a leading travel company based in Kenya, we pride ourselves on our extensive knowledge
                    of the region and our commitment to delivering exceptional service. Our curated packages
                     are designed to immerse
                    you in the breathtaking landscapes, diverse wildlife, and rich traditions of Kenya and beyond.
                   </p>
            </div>

            <div className="about-img"> 
            <img src={about} alt='An image of zaph tours graffiti' className='zaph-img'/>

            </div>
        </section>
    )
}

export default About;
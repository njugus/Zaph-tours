
import hero from '../../assets/Hero section 5.jpg'
import './Hero.css'


function Hero() {
    return(

        <section className="hero-section">
        <div className='hero-img'>
        <img src={hero} alt='An image of hero section' className='img'/>

        <div class="overlay">
        <h1>Welcome to Zaph Tours</h1>
        <p>Explore the world with us</p>

        </div>
        </div>
        </section>
       
    ) 
}

export default Hero;

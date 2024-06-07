import myCollection from '../../Data/Data'
import hero from '../../assets/hero-section-3.jpg'
import './Hero.css'


function Hero() {
    return(

        <section className='hero-section'>
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

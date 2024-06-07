import './Testimonials.css'
import sarah from '../../assets/alisson.jpg'
import alfred from '../../assets/alfred.jpg'
import andrew from '../../assets/Andrew.jpg'
import lucas from '../../assets/lucas.jpg'
function Testimonials() {
    return(
        <>
        <section className='test-heading'>
            <h1>Testimonials</h1>
            
        </section>
        <section className="testimonies">
            <div className="testimony-wrapper">
                <div className="testimony-img">
                    <img src={sarah} alt='image of sarah' className='img-pic'/>
                </div>
                <div className="testimony-description">
                    <p>
                    Our safari with Zaph Tours was an unforgettable adventure!
                     The guides were knowledgeable and made every moment special." - <b>Sarah W</b>
                    </p>
                </div>

            </div>

            <div className="testimony-wrapper">
                <div className="testimony-img">
                    <img src={alfred} alt='image of alfred' className='img-pic'/>
                </div>
                <div className="testimony-description">
                    <p>
                    "Zaph Tours made our dream vacation come true.
                     Every detail was perfect, and the wildlife experiences were beyond our expectations!" -<b> David L.</b>
                    </p>
                </div>

            </div>

            <div className="testimony-wrapper">
                <div className="testimony-img">
                    <img src={andrew} alt='image of alfred' className='img-pic'/>
                </div>
                <div className="testimony-description">
                    <p>
                    "From start to finish, Zaph Tours provided exceptional service.
                     We felt safe, well-informed, and truly immersed in the beauty of Kenya." - <b>Andrew L.</b>
                    </p>
                </div>

            </div>

            <div className="testimony-wrapper">
                <div className="testimony-img">
                    <img src={lucas} alt='image of lucas' className='img-pic'/>
                </div>
                <div className="testimony-description">
                    <p>
                    "The best travel company we've ever used!
                     Zaph Tours crafted an incredible itinerary that left us with lifelong memories." - <b>John R.</b>

                    </p>
                </div>

            </div>
        </section>
        </>
    )
}

export default Testimonials;
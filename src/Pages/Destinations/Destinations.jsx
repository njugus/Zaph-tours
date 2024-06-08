import './Destinations.css'
import amboseli from '../../assets/Amboseli.jpg'
import diani from '../../assets/Diani.jpg'
import maldi from '../../assets/maldives.jpg'
import hellsgate from '../../assets/hells-gate.jpg'
import victoria from '../../assets/victoria-falls.jpg'
import samburu from '../../assets/samburu.jpg'
import maasaimara from '../../assets/maasai-mara.jpg'
import mtkenya from '../../assets/mt-kenya.jpg'
import aberdare from '../../assets/aberdares.jpg'
function Destinations() {
    return (
    
        <>        
        <section className='destin-heading'>
        <h1>Top Destinations Await You</h1>
        </section>

        <section className="destinations">

        <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={amboseli} alt='a picture of amboseli park' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Amboseli National Park</h1>
            
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={diani} alt='a picture of Diani' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Diani</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={maldi} alt='a picture of maldives' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Maldives</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={hellsgate} alt='a picture of hells gate' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1> Hell's Gate</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={samburu} alt='a picture of samburu' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Samburu</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={victoria} alt='a picture of maldives' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Maldives</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={maasaimara} alt='a picture of maldives' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Maasai Mara</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={aberdare} alt='a picture of maldives' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>The Aberdares</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

    <div className="destinations-wrapper">
         <div className="destination-img">
        <img src={mtkenya} alt='a picture of maldives' className='destination-image'/>
        </div>
        <div className="destination-info">
            <h1>Mt Kenya National Park</h1>
            <p>
            <h3>Top Reasons To Visit</h3>
               Vast Landscapes | Wildlife Diversity |<br/>
               Great Migration | Big Five | Scenic Safaris
            </p>
            <p>Price per Group: </p>
            <p>Individual Cost: </p>
        </div>

    </div>

        </section>

        </>
      
    )
}

export default Destinations;
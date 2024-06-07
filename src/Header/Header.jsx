import './Header.css';
import Contact from '../Pages/Contact Us/Contact Us';
import Destinations from '../Pages/Destinations/Destinations';
import Trips from '../Pages/Trips/Trips';
import Home from '../Pages/Home/Home';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    return(
        <>
    <section className='header'>
      <div className="header-logo">
        <h1 className='heading'>Zaph Tours</h1>
      </div>
      <div className="navbar">
        <ol className='navlist'>
          <li className='list-item'><Link to='/'> Home </Link></li>
          <li className='list-item'><Link to='/Destinations'>Destinations</Link></li>
          <li className='list-item'><Link to='/Trips'>Trips</Link></li>
          <li className='list-item'><Link to='/Contact Us'> Contact Us </Link></li>
        </ol>
      </div>
    </section>
        </>
    )
}
export default Header;
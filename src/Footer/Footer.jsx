import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <h2>Follow Us</h2>
                <div className="social-media">
                    <a href="https://www.facebook.com/yourcompany" target="_blank" >
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com/yourcompany" target="_blank" >
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/yourcompany" target="_blank" >
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Zaph Tours. All rights reserved.</p>
            </div>
        </footer>
        </>
    ) 
}

export default Footer;
import './Contact.css'
function Contact() {
    return (
        <section className="contact-section"> 
            <div className="form-section">
                <form action="/" method="" className="main">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                    <button type="button">Submit</button>
                </form>
                <div className='contact-credentials'>
                    <p>Zaphtours@gmail.com</p>
                    <p>Phone : +254110080435</p>

                </div>
            </div>

            <div className="map-section">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26431.34573320013!2d37.02607217540662!3d-0.7886544324387079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828b9799ec0d64b%3A0xf748409ad84e3fe7!2sMuranga%20County!5e0!3m2!1sen!2ske!4v1717903099094!5m2!1sen!2ske"
                    width="600" 
                    height="450" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0"
                ></iframe>
            </div>
        </section>
    );
}

export default Contact;

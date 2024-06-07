import './Newsletter.css'
function Newsletter() {
    return (
        <>

        <section className="newsletter">
        <div className="main-heading">
            <h1 className = 'news-head'>Sign Up For Our NewsLetter</h1>
        </div>
            <div className='wrapper'>

                
            <div className="text-div">
                <h1 className='news-heading'>Newsletter</h1>
                <p className='para'>Stay up do date on matters safaris and adventures.</p>
            </div>

            <div className="input-div">
                <label for= "email">
                <input type="email" id="email" name="email" placeholder="Enter your email" className='text-box'/>
                </label>
                <button type='button' className="subs">Subscribe</button>
            </div>

            <div className='foot-text'>
                <p className='para'>Your Email is safe with us we don't spam</p>
            </div>

            </div>

        </section>
        </>
    )
}

export default Newsletter;
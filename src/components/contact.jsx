import '../styles/style.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="map">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7751.56691617488!2d75.63074054232789!3d13.731556000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48baa6319ba953f!2sKuvempu%20University!5e0!3m2!1sen!2sin!4v1670180232332!5m2!1sen!2sin"
                    width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <h4>Kuvempu University<br />
                    Jnana sahyadri, Shankaraghatta</h4>
                Bhadravathi(tq), Shivamogga(dist).
                <br />
                Phone : +91 7761538115<br />
                Email : kuvempu@edu.com<br />
                Facebook :<a
                    href=" http://facebook.com/Kuvempu-University">http://facebook.com/Kuvempu-University</a><br/>
            </div>
        </div>
    );
}

export default Contact;
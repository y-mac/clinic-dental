import './welcome.css';

const Welcome = () => {
    return ( 
        <>
        <section className="welcome-section">
          <div className="welcome-wrapper">
            <section className="welcome-wrapper__left">
              <h1>
                We Provide High
                <span> Quality <b> Dental </b> Services </span>
              </h1>
              <p>
                Appropriately embrace transparent materials via turnkey niche markets.
              </p>
              <div className="welcome-wrapper__buttons">
                <button>
                  Get Started
                </button>

                <button>
                  Learn More
                </button>
              </div>
            </section>
            <section className="welcome-wrapper__right">
              <figure>
                <img src="assets/img/doctor_illustration.png" alt="doctor illustration" />
              </figure>
            </section>
          </div>
        </section>
          
          
        </>
     );
}
 
export default Welcome;
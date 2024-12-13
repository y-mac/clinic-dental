import './aboutUs.css';

const AboutUs = () => {
    return ( 
      <>
        <section className="about-section">
          <div className="about-section__wrapper">
            <header className="about-header">
              <p className="strongText-left">
                WHO <b> WE ARE </b>
              </p>

              <p className="strongText-right">
                Our Glorious
                <span> History </span>
              </p>
            </header>

            <div className="about-body">
              <section className="about-body__img">
                <img src="/assets/img/Image.png" />
              </section>
              <section className="about-body__text">
                <h5> Our history </h5>
                <p>
                  Dentics is a well-known name in dental and oral care in New York. The journey of this institution started in 1990 under the hands of Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics dental center has been leading the way in dental treatment in USA for more than 30 years in keeping with the evolution of time and the modernization of the era.
                </p>
              </section>
            </div>
          </div>
        </section>
      </>
    );
}
 
export default AboutUs;
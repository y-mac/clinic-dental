import './servicesHeader.css'

const ServicesHeader = () => {
  return (
    <>
      <header className="services-header">
        <div className="services-header__wrapper">
          <div className="services-header__left">
            <h1> How to get our service? </h1>
            <p> Just follow these simple steps </p>
          </div>
          <div className="services-header__right">
            <ul className="services-steps">
              <li>
                <p> Call for
                  appointment </p>
              </li>
              <li>
                <p> Get a <span> Date & Serial </span> </p>
              </li>
              <li>
                <p> Consult
                  Your dentist </p>
              </li>
            </ul>
          </div>
        </div>

      </header>
    </>
  );
}

export default ServicesHeader;
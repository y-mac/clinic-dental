import ServicesHeader from "../ServicesHeader/ServicesHeader";
import './servicesBody.css';

const ServicesBody: React.FC = () => {
    return ( 
      <>
        <div className="services-body">
            <ServicesHeader />
          <div className="services-body__wrapper">
            <section className="services-body__left">
              <h3>
                Always <b> Lough </b>
                <span> Whenever Its Possible </span>
              </h3>

              <figure>
                <img src="/assets/img/doctor_svg.png" alt="doctor_svg" />
              </figure>
            </section>
            <section className="services-body__right">
              <header>
                We also offer treatments that improve the appearance of your smile giving you the confidence boost you deserve. The process or our treatment below.
              </header>

              <h4> WHAT WE PROVIDE </h4>

              <ul className="services__list">
                <li> Check ups </li>
                <li> Emergencies </li>
                <li> Cosmetic dentistry </li>
                <li> Dental implants </li>
                <li> Orthodontics </li>
                <li> Children’s dentistry </li>
                <li> Preventative checks </li>
                <li> Telephone consultations </li>
              </ul>

            </section>
          </div>
            
        </div>
      </>
    );
}
 
export default ServicesBody;
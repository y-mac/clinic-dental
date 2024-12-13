import { useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import UseFetchDoctors from '../../hooks/useFetchDoctors';
import { Carousel } from 'antd';
import './doctorsList.css';




const DoctorsList:React.FC = () => {
    
    const {uid} = useUser();

    const {doctorsList, getDoctorList} = UseFetchDoctors();


    useEffect(()=>{
      getDoctorList(uid);
    },[])
    
    return ( 
        <>
        <section className="doctors-section">

          <div className="doctors-section__wrapper">
            <header className='doctors-section__header'>
              <p>
                Meet Some of Our
                <span> Brains </span>
              </p>
              <p>
                MEET OUR <b> DOCTORS </b>
              </p>
            </header>

            <div className="carousel-wrapper">
               
            <Carousel 
              arrows={true} 
              dots={false}
              className="doctors-carousel"
              autoplay={false}
              slidesToShow={4}
              slidesToScroll={1}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}
            > 
              {doctorsList.map( doctor => (
                <div className='doctors-carusel__item'>
                  <div className='doctors-carusel__item-wrapper'>
                    <figure>
                      <img src={doctor.photo !== '' ? doctor.photo : 'assets/img/Doctor01.png' } alt={doctor.name} />
                    </figure>
                    <h3> {doctor.name} </h3>
                    <p>
                      {doctor.specialty}
                    </p>
                    <p> {doctor.university} </p>
                    <button className='appointment-button'>
                      Appointment
                    </button>
                  </div>

                </div>
              ))}
               
              
              
            </Carousel>

            </div>

            
          </div>



        </section>
        </>
     );
}
 
export default DoctorsList;
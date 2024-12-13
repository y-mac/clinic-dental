import { Carousel } from "antd";
import './reviewList.css';

const ReviewList = () => {
    return ( 
       <>
        <section className="reviews-section">
          <div className="reviews-carousel">
            <Carousel>
              <div>
                <div className="slide__wrapper">
                  <figure className="slide-img">
                    <img src="/assets/img/says.png" alt="photo" />
                  </figure>
                  <div className="slide-content">
                    <h4> What our client says about us </h4>
                     
                    <p>
                    <img src="/assets/img/quotes.png" alt="" className="quotes-img" />
                      I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="slide__wrapper">
                  <figure className="slide-img">
                    <img src="/assets/img/says.png" alt="photo" />
                  </figure>
                  <div className="slide-content">
                    <h4> What our client says about us </h4>
                    <img src="/assets/img/quotes.png" alt="" className="quotes-img" /> 
                    <p>
                      I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="slide__wrapper">
                  <figure className="slide-img">
                    <img src="/assets/img/says.png" alt="photo" />
                  </figure>
                  <div className="slide-content">
                    <h4> What our client says about us </h4>

                    <img src="/assets/img/quotes.png" alt="" className="quotes-img" /> 

                    <p>
                      I’ve seen a lot of Dentists over my lifetime because I’ve had some serious dental issues. But my highest praise goes to Dr. Jonathon Doe and his staffs . I was always very anxious going to the dentist but this time at Digital Implant, my experience was so painless and relaxed their was no discomfort whatsoever.
                    </p>
                  </div>
                </div>
              </div>
            
            </Carousel>
          </div>
        </section>
       </>
    );
}
 
export default ReviewList;
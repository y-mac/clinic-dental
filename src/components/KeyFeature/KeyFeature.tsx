import './keyFeature.css';

const KeyFeature = () => {
    return ( 
      <>
        <section className="keys-section">
          <div className="keys-section__wrapper">
            <header>
              <p className="left-headline">
                What Makes Us More <span> Special </span>
              </p>
              <div className="line"></div>
              <p className="right-headline">
                Key <b> Feature </b>
              </p>
            </header>

            <div className="key-cards">
              <article className="key-cards__item">
                <div className="item-wrapper">
                  <h4> Laser Technology </h4>
                  <p>
                    Worlds most advanced Diode Laser.
                    Your treatment experience will be
                    relaxing & smooth.
                  </p>
                </div>
              </article>

              <article className="key-cards__item">
                <div className="item-wrapper">
                  <h4> Painless Injection </h4>
                  <p>
                    Only dental clinic in New York, USA utilising Painless Injection system. You will be amazed!
                  </p>
                </div>
              </article>

              <article className="key-cards__item">
                <div className="item-wrapper">
                  <h4> Dental  Implant </h4>
                  <p>
                    30+ years of experience in Dental Implant with specialist care. You will be able to chew properly again!
                  </p>
                </div>
              </article>

              <article className="key-cards__item">
                <div className="item-wrapper">
                  <h4> 3D Dental Scanner  </h4>
                  <p>
                    One of the world’s most advanced 3D Dental Scanner with auto scanning only one in New York!
                  </p>
                </div>
              </article>
              <article className="key-cards__item">
                <div className="item-wrapper">
                  <h4> Digital Smile Design </h4>
                  <p>
                    We help to re-design your smile and shape your teeth to create a customised smile for your face!
                  </p>
                </div>
              </article>
              <article className="key-cards__item">
                <div className="item-wrapper">
                  <h4> Crown and Bridge </h4>
                  <p>
                    Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment
                  </p>
                </div>
              </article>
            </div>

          </div>

        </section>
      </>        
    );
}
 
export default KeyFeature;
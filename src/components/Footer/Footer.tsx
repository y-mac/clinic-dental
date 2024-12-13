import './footer.css';

const Footer = () => {
    return ( 
      <footer className="main-footer">
        <div className="footer-wrapper">
          <aside>
            <figure className="footer-logo">
              <img src="assets/img/logo_footer.png" />
            </figure>

            <p>
              Dentics is a well-known name in dental and oral care in New York. The journey of this institution started in 1990
            </p>
          </aside>
          <aside>
            <p> We are welcoming you </p>
            <h5>
              Want to visit
              our clinic?
            </h5>
            <p>
              Saturday - Thrusday
            </p>
            <p>
              10 am- 9 pm
            </p>
          </aside>
          <aside>
            <p> Important </p>
            <ul className="social-links">
              <li>Facebook</li>
              <li> Twitter </li>
              <li> Instagram </li>
              <li> Career </li>
              <li> Support </li>
              <li> Privacy policy </li>
            </ul>
          </aside>
          <aside>
            <p> Say hello to us </p>
            <p> hello@reallygreatsite.com </p>
            <p> Address </p>
            <p>
              123 Anywhere St., Any City, NY 39200
            </p>
          </aside>
        </div>

        <div className="copyright">
          © 2001-2022, All Rights Reserved
        </div>
      </footer>
    );
}
 
export default Footer;
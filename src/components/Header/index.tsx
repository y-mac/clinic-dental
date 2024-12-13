import {
  MenuOutlined
} from '@ant-design/icons';
import './header.css';

const Header:React.FC = () => {
    return ( 
      <header className="main-header">
        <div className='main-header__wrapper'>
        <figure className="main-header__figure">
          <img src="/assets/img/logo.png" />
        </figure>
        
        <button className="mobile-menu__btn">
           <MenuOutlined />
        </button>

        <nav className="main-header__nav">
          <ul>
            <li>
                Home
            </li>
            <li>
                Services
            </li>
            <li>
                About us
            </li>
            <li>
                Register
            </li>
            <li className="appointment🔅 ">
              <button className='appointment-btn'>
                Appointment
              </button>
            </li>
          </ul>
        </nav>
        </div>
        
      </header>
    );
}
 
export default Header;
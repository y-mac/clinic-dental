/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import AboutUs from './components/AboutUs/AboutUs';
import Brighten from './components/Brighten/Brighten';
import DoctorsList from './components/DoctorsList/DoctorsList';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import KeyFeature from './components/KeyFeature/KeyFeature';
import MakeAppointment from './components/MakeAppointment/MakeAppointment';
import ReviewList from './components/ReviewList/ReviewList';
import ServicesBody from './components/ServicesBody/ServicesBody';
import Subscribe from './components/Subscribe/Subscribe';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <ServicesBody />
      <KeyFeature />
      <Brighten />
      <AboutUs />
      <DoctorsList />
      <ReviewList />
      <MakeAppointment />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App

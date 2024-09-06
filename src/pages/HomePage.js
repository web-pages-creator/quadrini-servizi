import CustomCard from '../components/CustomCard';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import './styles/HomePage.css';
/* IMAGES */
import disinfestazioneImg from './../static/images/disinfestazione.jpeg'
import ambienteImg from './../static/images/ambiente.jpeg'
import cateringImg from './../static/images/catering.jpeg'
import cleaningImg from './../static/images/cleaning.jpeg'
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Carousel />
      <div className='home-page-title'>I nostri servizi</div>
      <div className='services-container'>
        <CustomCard img={cleaningImg} title='Sanificazione e pulizie'/>
        <CustomCard img={disinfestazioneImg} title='Disinfestazioni e Servizi ambientali'/>
        <CustomCard img={cateringImg} title='Ristorazione collettiva e Catering'/>
        <CustomCard img={cleaningImg} title='Servizi albergieri'/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;

import './styles/Footer.css';
import { MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="Footer">
      <div className='grid md:grid-cols-3 grid-cols1 gap-10'>
        <div className='footer-item footer-contatti grid-cols-1'>
          <div className='footer-item-title'>I nostri contatti</div>
          <div className='footer-item-content'>
            <div className='footer-item-content-item'><strong>E.I.A. ECOLOGIA IGIENE ALIMENTI SRL</strong><br />P.IVA: 03825471000</div>
            <div className='footer-item-content-item combined'><MdPlace />Via Carpi, 7 - 00071 - Pomezia (RM)</div>
            <div className='footer-item-content-item combined'><BsFillTelephoneFill />+39 3403580930</div>
            <div className='footer-item-content-item combined'><MdEmail />info@quadriniservizi.it</div>
          </div>
        </div>
        <div className='footer-item footer-azienda'>
          <div className='footer-item-title'>La nostra azienda</div>
          <div className='footer-item-content'>  
            <div className='footer-item-content-item'>EIA Ecologia Igiene Alimenti</div>
            <div className='footer-item-content-item'>Tecnosan Servizi e tecnologie sanificazione</div>
            <div className='footer-item-content-item'>Lavora con noi</div>
            <div className='footer-item-content-item'>Contatti</div>
          </div>
        </div>
        <div className='footer-item footer-servizi'>
          <div className='footer-item-title'>I nostri servizi</div>
          <div className='footer-item-content'>
            <div className='footer-item-content-item'>Ristorazione collettiva e catering</div>
            <div className='footer-item-content-item'>Disinfestazioni e Servizi ambientali</div>
            <div className='footer-item-content-item'>Sanificazione e Pulizie</div>
            <div className='footer-item-content-item'>Servizi alberghieri</div>
          </div>
        </div>
        {/* <div className='footer-item footer-social'>
          <div className='footer-item-title'>Seguici sui social</div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;

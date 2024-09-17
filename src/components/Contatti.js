import CustomInput from './CustomInput';
import './styles/Contatti.css';

function Contatti() {
  return (
    <div className="Contatti">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='left'>
          <div className='left-title'>Scrivici subito attraverso questo modulo per richiededere gratuitamente informazioni o un preventivo.</div>
          <div className=''><strong>Sede legale:</strong><br/>Via Carpi, 7 - 00071 - Pomezia (RM)<br />Tel: +39 3403580930<br />Email: info@quadriniservizi.it</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 form">
          <CustomInput type='text' label='Nome e Cognome *' />
          <CustomInput type='text' label='Nummero di telefono *' />
          <CustomInput type='text' label='Email *'/>
          <CustomInput type='text' label='Società (facoltativo)'/>
          <CustomInput className='col-span-3' type='textarea' label='* MESSAGGIO *'/>
        </div>
      </div>
    </div>
  );
}

export default Contatti;

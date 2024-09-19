import { useState } from 'react';
import CustomInput from './CustomInput';
import './styles/Contatti.css';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { useToast } from '@chakra-ui/react'

function Contatti() {
  const toast = useToast()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [societa, setSocieta] = useState('')
  const [mex, setMex] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [chaptVal, setChaptVal] = useState(null)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const handleInputChange = (val, updateFunction) => {
    updateFunction(val)
  }

  const handleSubmit = (e) => {
    if (emailSent) {
      return
    }
    e.preventDefault();
    const allRequiredTextFieldsFilledIn = name != '' && phone != '' && email != '' && mex != ''
    const allRequiredBooleanFieldsChecked = privacy
    let missingFields = []
    if (name == '') missingFields.push('Nome e Cognome')
    if (phone == '') missingFields.push('Telefono')
    if (email == '') missingFields.push('Email')
    if (mex == '') missingFields.push('Messaggio')
    if (!privacy) missingFields.push('Consenso Privacy')
    if (chaptVal == null) missingFields.push('Google reCAPTCHA')
    setErrorMessage(missingFields.join(', '))
    if (allRequiredTextFieldsFilledIn && allRequiredBooleanFieldsChecked && chaptVal) {
        setError(false)
        sendEmail(e)
    } else {
      setError(true)
    }
  }

  function sendEmail(e) {
    emailjs.send("service_irgqrg3","template_q8vhktp",{
      from_name: name,
      message: mex,
      telefono: phone,
      email: email,
      societa: societa,
      }, 'fPjEX6Gf3jcVjZ1ke')
      .then(() => {
        toast({
          title: 'Email Inviata!',
          description: "un operatore della nostra azienda la ricontatterà il prima possibile",
          status: 'success',
          duration: 5000,
          position: 'top',
          isClosable: true,
        })
        setEmailSent(true)
      }, (err) => {
        toast({
          title: 'Errore',
          description: "Non siamo riusciti ad inviare la mail, riprova più tardi: " + err,
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        })
      });
  }

  return (
    <form className="Contatti" onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='left'>
          <div className='left-title'>Scrivici subito attraverso questo modulo per richiededere gratuitamente informazioni o un preventivo.</div>
          <div className=''><strong>Sede legale:</strong><br/>Via Carpi, 7 - 00071 - Pomezia (RM)<br />Tel: +39 3403580930<br />Email: info@quadriniservizi.it</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 form">
          <CustomInput type='text' label='Nome e Cognome *' onChangeProperty={(val) => handleInputChange(val.target.value, setName)}/>
          <CustomInput type='text' label='Numero di telefono *' onChangeProperty={(val) =>handleInputChange(val.target.value, setPhone)}/>
          <CustomInput type='text' label='Email *' onChangeProperty={(val) => handleInputChange(val.target.value, setEmail)}/>
          <CustomInput type='text' label='Società (facoltativo)' onChangeProperty={(val) => handleInputChange(val.target.value, setSocieta)}/>
          <CustomInput type='textarea' label='* MESSAGGIO *' onChangeProperty={(val) => handleInputChange(val.target.value, setMex)}/>
          <div className='privacy md:col-span-2 col-span-1'>
            <input type='checkbox' className='checkbox' onChange={(val) => handleInputChange(val.target.checked, setPrivacy)}/>
            <h6>* Acconsento al trattamento dei miei dati personali in conformità alle vigenti norme sulla privacy. Dichiaro di aver letto e accettato l'informativa sulla privacy</h6>
          </div>
          <ReCAPTCHA sitekey='6LeiOUkqAAAAAMeuR7-w3_0uJXTeM3Q21-oj11G5' onChange={(val) => handleInputChange(val, setChaptVal)}></ReCAPTCHA>
          {error && <div className='md:col-span-2 col-span-1 error'>
            Non hai compilato i seguenti campi: {errorMessage}
          </div> }
          <div className='submit md:col-span-2 col-span-1' onClick={handleSubmit}>
            Invia
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contatti;

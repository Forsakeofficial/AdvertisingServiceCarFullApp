import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import '../Styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kde84mt', 'template_uv2nekd', form.current, 'pfy-_4fCPYZljY1o_')
      .then((result) => {
        console.log(result.text);
        alert('Wiadomość została wysłana');
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  }; //Skrypt EMAILJS

  const validateForm = () => {
    const { to_name, from_name, message } = form.current.elements;
    if(to_name.value.trim() === '' || from_name.value.trim() === '' || message.value.trim() === ''){
      alert('Proszę wypełnić wszystkie pola formularza.');
      return false;
  }
  if(!captchaVerified){
    alert('Proszę zweryfikować, że nie jesteś robotem.');
    return false;
  }
  return true;
} //Weryfikacja pustych pol 

const handleSubmit = (e) => {
  e.preventDefault();
  if(validateForm()){
    sendEmail(e);
  }
}; //Formularz 

const handleCaptchaChange = (value) => {
  if(value){
    setCaptchaVerified(true);
  }
}; //Captcha

return (
  <>
  <Navbar />
  <div className='container_contact'>
    <div className='contact_form'>
      <h1>Wyślij zgłoszenie</h1>

      <form ref={form} onSubmit={handleSubmit}>

      <label>Imię i nazwisko</label>
      <input type='text' name='to_name' placeholder='Podaj imię i nazwisko' />

      <label>E-mail</label>
      <input type='text' name='from_name' placeholder='Podaj e-mail' />

      <label>Wiadomość</label>
      <textarea name='message' rows='5'/>

      <ReCAPTCHA sitekey='6LfFBB4nAAAAAPtE0kB7FVsPimRf3sVeNNdiLbaS' onChange={handleCaptchaChange}  />

      <input type='submit' value='Wyślij' />
      </form>
    </div>
  </div>
  <Footer />
  </>
)
}


export default Contact;
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Register from '../Components/Register';
import Login from '../Components/Login';
import '../Styles/LoginAndRegister.css';
import { FaUserAlt } from 'react-icons/fa';

const LoginAndRegister = () => {
  const [activeContainer, setActiveSection] = useState('panel_login_user');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  }
  

return(
  <>
  <Navbar />
  <div className='container_account_login_register'>
    <div className='panel_login_and_register'>
      <div className='panel_login_and_register_selection'>

        <div className={`panel_login_user ${activeContainer === 'panel_login_user' ? 'active' : ''}`} onClick={() => handleSectionChange('panel_login_user')}>
          <FaUserAlt style={{ fontSize: 50 }} />
          <h1>Zaloguj się</h1>
        </div>

        <div className={`panel_register_user ${activeContainer === 'panel_register_user' ? 'active' : ''}`} onClick={() => handleSectionChange('panel_register_user')}>
          <FaUserAlt style={{ fontSize: 50 }} />
          <h1>Załóż konto</h1>
        </div>
      </div>

      <div className='panel_form'>
        {activeContainer === 'panel_login_user' && (
          <Login />
        )}
        
        {activeContainer === 'panel_register_user' && (
          <Register /> 
        )}
      </div>
    </div>
  </div>
  <Footer />
  </>
)}

export default LoginAndRegister;
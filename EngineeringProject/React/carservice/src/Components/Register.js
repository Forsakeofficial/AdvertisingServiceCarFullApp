import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaKey } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          username: username,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Rejestracja zakończona sukcesem, wyświetl komunikat i wyczyść formularz
        setSuccessMessage('Rejestracja udana, zaloguj się do konta');
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Błąd rejestracji:', error);
      setError('Wystąpił błąd podczas rejestracji');
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <label>
          <FaUserAlt style={{ fontSize: '1.2rem', paddingTop: '2px' }} /> Imię i nazwisko
        </label>
        <input
          type='text'
          name='name'
          placeholder='Wprowadź imię i nazwisko'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>
          <FaUserAlt style={{ fontSize: '1.2rem', paddingTop: '2px' }} /> Użytkownik
        </label>
        <input
          type='text'
          name='username'
          placeholder='Wprowadź nazwę użytkownika'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>
          <FaEnvelope style={{ fontSize: '1.2rem', paddingTop: '2px' }} /> E-mail
        </label>
        <input
          type='text'
          name='email'
          placeholder='Wprowadź adres email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>
          <FaKey style={{ fontSize: '1.2rem', paddingTop: '2px' }} /> Hasło
        </label>
        <input
          type='password'
          name='password'
          placeholder='Wprowadź hasło'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className='error'>{error}</p>}

        <input type='submit' value='Załóż konto' />
      </form>
      {successMessage && <p className='success'>{successMessage}</p>}
    </>
  );
};

export default Register;

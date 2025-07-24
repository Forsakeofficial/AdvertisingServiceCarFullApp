import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sprawdzenie, czy istnieje token JWT w localStorage po odświeżeniu strony
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setLoggedIn(true);
    }
  }, []);

  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameOrEmail: username, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;

        // Wyświetlenie tokenu JWT w konsoli (opcjonalne)
        console.log('Token JWT:', accessToken);

        // Zapisanie tokenu JWT w localStorage
        localStorage.setItem('accessToken', accessToken);

        // Ustawienie stanu isLoggedIn na true
        setLoggedIn(true);

        // Logowanie zakończone sukcesem
        console.log('Zalogowano pomyślnie');
      } else {
        // Obsługa błędów logowania, np. wyświetlenie komunikatu o błędzie
        setError('Nieprawidłowy email lub hasło');
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
      setError('Wystąpił błąd podczas logowania');
    }
  };

  // Jeśli użytkownik jest zalogowany, przekieruj go na stronę "/Konto"
  if (isLoggedIn) {
    window.location.href = '/Konto';
    return null; // Możesz zwrócić null, ponieważ użytkownik zostanie przekierowany
  }

  return (
    <>
      <form>
        <label>
          <FaEnvelope style={{ fontSize: '1.2rem', paddingTop: '2px' }} /> E-mail
        </label>
        <input
          type="text"
          placeholder="Wprowadź adres email"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>
          <FaKey style={{ fontSize: '1.2rem', paddingTop: '2px' }} /> Hasło
        </label>
        <input
          type="password"
          placeholder="Wprowadź hasło"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className='error'>{error}</p>}
        <input type="submit" onClick={handleLoginForm} value="Zaloguj się" />
      </form>
    </>
  );
}

export default LoginForm;

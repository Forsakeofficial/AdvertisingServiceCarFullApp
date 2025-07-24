// Auth.js

// Funkcja do sprawdzenia, czy użytkownik jest zalogowany na podstawie istnienia tokenu JWT w localStorage
export const isUserLoggedIn = () => {
  const accessToken = localStorage.getItem('accessToken');
  // Tutaj możesz dodać bardziej zaawansowaną logikę sprawdzania tokenu, na przykład sprawdzenie, czy token wygasł
  return accessToken !== null && accessToken !== undefined;
};

// Funkcja do logowania użytkownika
export const login = async (username, password) => {
  try {
      // Wyślij żądanie logowania do serwera
      const response = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
          const data = await response.json();
          const accessToken = data.accessToken;

          // Zapisz token JWT w localStorage po pomyślnym zalogowaniu
          localStorage.setItem('accessToken', accessToken);

          // Możesz również dodać kod do przekierowania użytkownika na inną stronę po zalogowaniu
          // window.location.href = '/Konto';

          return true; // Zwróć true, jeśli logowanie powiodło się
      } else {
          // Obsługa błędów logowania
          console.error('Błąd logowania');
          return false; // Zwróć false, jeśli logowanie nie powiodło się
      }
  } catch (error) {
      console.error('Wystąpił błąd:', error);
      return false; // Zwróć false w przypadku innych błędów
  }
};

// Funkcja do wylogowania użytkownika
export const logout = () => {
  // Usuń token JWT z localStorage lub ciasteczek
  localStorage.removeItem('accessToken');
  // Możesz również dodać kod do wyzerowania stanu uwierzytelnienia użytkownika, jeśli go używasz
  // Na przykład, jeśli używasz kontekstu do przechowywania stanu uwierzytelnienia
  // Ustaw stan uwierzytelnienia na false lub wyzeruj inne potrzebne dane użytkownika
};

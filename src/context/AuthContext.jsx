import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { checkAuth, logout } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggingOut, setLoggingOut] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      setLoggingOut(true);
      await logout();
      navigate('/');
    } catch (err) {
      console.error('There was an error logging out', err);
    }
  }

  // Call /user endpoint on route change
  useEffect(() => {
    async function checkLoggedInStatus() {
      try {
        const res = await checkAuth();
  
        if (res && !loggingOut) {
          setLoggedIn(true);
          setUsername(res.user.username);
        } else {
          setLoggedIn(false);
          setUsername('');
        }
      } catch (err) {
        setLoggedIn(false);
        setUsername('');
        console.error('Error', err);
      }
    }
    checkLoggedInStatus();
  }, [location]);

  return (
    <AuthContext.Provider value={{ handleLogout, loggedIn, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

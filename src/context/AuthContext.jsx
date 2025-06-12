import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedInStatus = (loginStatus) => setLoggedIn(loginStatus);

  return (
    <AuthContext.Provider value={{ loggedIn, handleLoggedInStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

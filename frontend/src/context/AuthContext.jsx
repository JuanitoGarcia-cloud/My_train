import { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export function AuthProvider ({ children }) {

  const [user, setUser] = useState(null);

  const login = async (username, phone, password) => {
    const res = await api.post('/auth/login', { username, phone, password });
    localStorage.setItem('token', res.data.token);
    const me = await api.get('/auth/me');
    setUser(me.data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
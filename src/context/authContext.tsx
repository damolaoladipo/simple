import React, { createContext, useState, ReactNode } from 'react';
import { AuthContextType } from '../utils/interface.util';


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState<any | null>(null);

  const login = (token: string, user: any) => {
    setAuthToken(token);
    setUser(user);
    localStorage.setItem('authToken', token); 
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



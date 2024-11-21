import { useState } from 'react';
import { ILogoutResponse } from "../../utils/auth.util";
import { logout } from '../../api/auth';


export const useLogout = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);



  const logoutUser = async () => {
    setLoading(true)
    setError(null)

    try {
      const isLoggedOut: ILogoutResponse = await logout();
      setResponse(isLoggedOut.message)

      setAuthToken(null);
      setUser(null);
      localStorage.removeItem('authToken');

    } catch (err: any) {
      setError(err.response?.data?.message || 'Logout failed')

    } finally {
      setLoading(false);
    }
      

  };

  return { logoutUser, error, loading, response, authToken, user };
};

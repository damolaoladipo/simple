import { useState } from 'react';
import { ILogin, ILoginResponse } from "../../utils/interface.util";
import { login } from '../../api/auth';



export const useLogin = () => {
  const [response, setResponse] = useState<ILoginResponse | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);


  const loginUser = async (loginData: ILogin ) => {
    setError(null);
    try {
      
      const isLoggedIn = await login(loginData.email, loginData.password)
        setResponse(isLoggedIn) 

        setAuthToken(isLoggedIn.token);
        setUser(isLoggedIn.user);
        localStorage.setItem('authToken', isLoggedIn.token)
      
    } catch (err: any) {
      setError(err.response?.data?.message  || 'An errror occured');
    }
  };

  return { loginUser, error, response, authToken, user };
};


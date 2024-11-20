import { useState } from 'react';
import { useAuth } from "../../context/authContext";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (loginData: LoginData) => {
    setError(null);
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.data.authToken, data.data.user);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return { loginUser, error };
};

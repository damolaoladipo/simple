import { useState } from 'react';
import axios from 'axios';

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const performRegister = async (userData: any) => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/auth/register', userData);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return { performRegister, loading, error };
};

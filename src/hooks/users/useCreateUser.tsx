import { useState } from 'react';
import axios from 'axios';

export const useCreateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  const createUser = async (userData: any) => {
    setLoading(true);
    try {
      const response = await axios.post('/users', userData);
      setUser(response.data);
    } catch (err) {
      setError('Error creating user');
    } finally {
      setLoading(false);
    }
  };

  return { createUser, user, loading, error };
};

import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUser = (userId: string, userType?: string) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const queryParams = userType ? `?userType=${userType}` : '';
        const response = await axios.get(`/users/${userId}${queryParams}`);
        setUser(response.data);
      } catch (err) {
        setError('Error fetching user');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId, userType]);

  return { user, loading, error };
};

import { useState, useEffect } from 'react';
import { getUserById } from '../../api/user'; 
import { IUser } from '../../utils/interface.util'; 

export const useUser = (userId: string) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string| null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      try {
        const fetchedUser = await getUserById(userId)
        setUser(fetchedUser);
        
        localStorage.setItem('userId', userId)

      } catch (err: any) {
        setError(err.message || 'Error fetching user');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return {useUser, user, loading, error };
};

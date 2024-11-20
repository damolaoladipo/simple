import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllUsers } from '../../api/user';

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const fetchedUsers = await getAllUsers()
        setUsers(fetchedUsers);

      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return {useUsers, users, loading, error };
};

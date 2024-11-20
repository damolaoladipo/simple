import { useState } from 'react';
import axios from 'axios';

export const useDeleteUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const deleteUser = async (userId: string) => {
    setLoading(true);
    try {
      await axios.delete(`/users/${userId}`);
      setMessage('User deleted successfully');
    } catch (err) {
      setError('Error deleting user');
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, message, loading, error };
};

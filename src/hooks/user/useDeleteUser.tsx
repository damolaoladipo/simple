import { useState } from 'react';
import { deleteUserById } from '../../api/user';

export const useDeleteUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const deleteUser = async (userId: string) => {
    setLoading(true);

    try {
      const deletedUser = await deleteUserById(userId)
      setMessage( deletedUser.message || 'User deleted successfully');

    } catch (err) {
      setError('Error deleting user');
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, message, loading, error };
};

import { useState } from 'react';
import { deleteUserById } from '../../api/user';

export const useDeleteUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const deleteUser = async (userId: string) => {
    setLoading(true);

    try {
      const deletedUser = await deleteUserById(userId)
      setResponse( deletedUser.message || 'User deleted successfully');

    } catch (err) {
      setError('Error deleting user');
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, response, loading, error };
};

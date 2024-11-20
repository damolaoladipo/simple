import { useState } from 'react';
import axios from 'axios';

export const useUpdateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedUser, setUpdatedUser] = useState<any | null>(null);

  const updateUser = async (userId: string, updatedData: any) => {
    setLoading(true);
    try {
      const response = await axios.put(`/users/${userId}`, updatedData);
      setUpdatedUser(response.data);
    } catch (err) {
      setError('Error updating user');
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, updatedUser, loading, error };
};

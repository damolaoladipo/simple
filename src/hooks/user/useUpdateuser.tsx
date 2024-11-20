import { useState } from 'react';
import { updateUserById } from '../../api/user'; 
import { IUser } from '../../utils/interface.util'; 

export const useUpdateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);

  const updateUser = async (userId: string, updatedData: any) => {
    setLoading(true);
    try {
      const updatedUser = await updateUserById(userId, updatedData);
      setUpdatedUser(updatedUser);

    } catch (err) {
      setError('Error updating user');
    } finally {
      setLoading(false);
    }
  }; 

  return { updateUser, updatedUser, loading, error };
};

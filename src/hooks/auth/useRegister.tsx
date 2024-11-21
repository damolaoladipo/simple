import { useState } from 'react';
import { register } from '../../api/auth';
import { IRegister, IRegisterResponse } from '../../utils/auth.util';

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<IRegisterResponse | null>(null);

  const performRegister = async (userData: IRegister): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
     const isRegistered = await register(userData);
     setResponse(isRegistered)

    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return { performRegister, loading, error, response };
};

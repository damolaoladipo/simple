import { useState } from 'react';
import { resetPassword } from '../../api/auth';
import { IResetPasswordRequest, IResetPasswordResponse } from '../../utils/interface.util';

export const useResetPassword = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const performResetPassword = async (token: string, newPassword: string) => {
    setLoading(true);
    setError(null);

    try {
      const data: IResetPasswordRequest = { token, newPassword };
      const reset: IResetPasswordResponse = await resetPassword(data);
      setResponse(reset.message); 
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return { performResetPassword, error, loading, response };
};

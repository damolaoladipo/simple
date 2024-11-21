import { useState } from 'react';
import { forgotPassword } from '../../api/auth';
import { IForgotPasswordRequest, IForgotPasswordResponse } from '../../utils/auth.util';

export const useForgotPassword = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const initiateForgotPassword = async (email: string) => {
    setLoading(true);
    setError(null);

    try {
      const data: IForgotPasswordRequest = { email };
      const result: IForgotPasswordResponse = await forgotPassword(data);
      setResponse(result.message);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to initiate password reset');
    } finally {
      setLoading(false);
    }
  };

  return { initiateForgotPassword, error, loading, response };
};

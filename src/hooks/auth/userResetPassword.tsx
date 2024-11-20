import { useState } from "react";

export const useResetPassword = () => {
    const [error, setError] = useState<string | null>(null);
  
    const resetPassword = async (token: string, id: string, newPassword: string) => {
      setError(null);
      try {
        const response = await fetch(`/auth/reset-password?token=${token}&id=${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPassword }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          setError(data.message || 'Failed to reset password');
        }
      } catch (err) {
        setError('An error occurred');
      }
    };
  
    return { resetPassword, error };
  };
  
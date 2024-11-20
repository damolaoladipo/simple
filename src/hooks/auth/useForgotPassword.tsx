import { useState } from "react";

export const useForgotPassword = () => {
    const [error, setError] = useState<string | null>(null);
  
    const forgotPassword = async (email: string) => {
      setError(null); 
      try {
        const response = await fetch('/auth/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          setError(data.message || 'Failed to send reset link');
        }
      } catch (err) {
        setError('An error occurred');
      }
    };
  
    return { forgotPassword, error };
  };
  
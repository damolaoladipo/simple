import React, { createContext, ReactNode } from 'react';
import { AuthContextType } from '../utils/interface.util';
import { useForgotPassword } from '../hooks/auth/useForgotPassword';
import { useRegister } from '../hooks/auth/useRegister';
import { useLogin } from '../hooks/auth/useLogin';
import { useLogout } from '../hooks/auth/useLogout';
import { useResetPassword } from '../hooks/auth/userResetPassword';


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  
  const {performRegister, response: registerResponse, loading: registerLoading, error: registerError} = useRegister()
  const {loginUser, authToken, response: userResponse , user: userLogin, error: loginError} = useLogin()
  const {logoutUser, response: logouResponse, error: logoutError} = useLogout()
  const {initiateForgotPassword, response: forgotPasswordResponse, loading: forgotPasswordLoading, error: forgotPasswordError} = useForgotPassword()
  const {performResetPassword, response: resetPasswordResponse, loading: resetPasswordLoading, error: resetPasswordError} = useResetPassword()


  return (
    <AuthContext.Provider 
    value={{ 

      authToken: authToken,
      user: userLogin,
      loading: registerLoading || forgotPasswordLoading || resetPasswordLoading,
      error: registerError || loginError || logoutError || forgotPasswordError || resetPasswordError,
      response: registerResponse || userResponse || logouResponse || forgotPasswordResponse || resetPasswordResponse,
      login: loginUser,
      logout: logoutUser, 
      register: performRegister,
      forgotPassword: initiateForgotPassword,
      resetPassword: performResetPassword,
      
     }}>
      {children}
    </AuthContext.Provider>
  );
};



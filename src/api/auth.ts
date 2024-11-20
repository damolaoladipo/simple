import apiClient from './api';
import { 
  IForgotPasswordRequest, 
  IForgotPasswordResponse, 
  ILoginResponse, 
  ILogoutResponse, 
  IRegister, 
  IRegisterResponse, 
  IResetPasswordRequest, 
  IResetPasswordResponse } from '../utils/interface.util'

export const login = async (email: string, password: string): Promise<ILoginResponse> => {
  try {
    const response = await apiClient.post<ILoginResponse>('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const register = async (data: IRegister): Promise<IRegisterResponse> => {
  try {
    const response = await apiClient.post<IRegisterResponse>('/auth/register', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const logout = async (): Promise<ILogoutResponse> => {
  try {
    const response = await apiClient.post<ILogoutResponse>('/auth/logout');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};


export const forgotPassword = async (data: IForgotPasswordRequest): Promise<IForgotPasswordResponse> => {
  try {
    const response = await apiClient.post<IForgotPasswordResponse>('/auth/forgot-password', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to initiate password reset');
  }
};


export const resetPassword = async (data: IResetPasswordRequest): Promise<IResetPasswordResponse> => {
  try {
    const response = await apiClient.post<IResetPasswordResponse>('/auth/reset-password', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to reset password');
  }
};


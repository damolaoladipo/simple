import apiClient from './api';
import { ILoginResponse, ILogoutResponse, IRegister, IRegisterResponse } from '../utils/interface.util'

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
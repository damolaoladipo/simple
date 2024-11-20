import apiClient from './api';

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (data: Record<string, any>) => {
  const response = await apiClient.post('/auth/register', data);
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post('/auth/logout');
  return response.data;
};

import { ApiResponse } from '../utils/auth.util';
import { IUser } from '../utils/user.util';
import apiClient from './api';



export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const response: ApiResponse<IUser[]> = await apiClient.get('/users');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error fetching all users");
  }
};

export const getUserById = async (id: string): Promise<IUser> => {
  try {
    const response: ApiResponse<IUser> = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error fetching user with id: ${id}`);
  }
};

export const updateUserById = async (id: string, userData: any): Promise<IUser> => {
  try {
    const response: ApiResponse<IUser> = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error updating user with id: ${id}`);
  }
};

export const deleteUserById = async (id: string): Promise<any> => {
  try {
    const response = await apiClient.delete(`/users/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error deleting user with id: ${id}`);
  }
};
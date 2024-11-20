import apiClient from './api';
import { ApiResponse, IUser } from '../utils/interface.util'

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const response: ApiResponse<IUser[]> = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    throw new Error("Error fetching all users");
  }
};

export const getUserById = async (id: string): Promise<IUser> => {
  try {
    const response: ApiResponse<IUser> = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user with id: ${id}`);
  }
};

export const updateUser = async (id: string, userData: any): Promise<IUser> => {
  try {
    const response: ApiResponse<IUser> = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating user with id: ${id}`);
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    const response = await apiClient.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting user with id: ${id}`);
  }
};
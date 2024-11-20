import apiClient from './api';
import { ApiResponse, ITransaction } from '../utils/interface.util';


export const getAllTransactions = async (): Promise<ITransaction[]> => {
  try {
    const response: ApiResponse<ITransaction[]> = await apiClient.get('/transactions');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error fetching all transactions");
  }
};


/**
 * @name getUserTransactions
 * @description Fetch all transactions associated with a user
 * @route GET /transaction/:userId
 * @access Public
 */
export const getUserTransactions = async (userId: string): Promise<ITransaction[]> => {
  try {
    const response: ApiResponse<ITransaction[]> = await apiClient.get(`/transaction/${userId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error fetching transactions for user with ID: ${userId}`);
  }
};


export const getTransactionById = async (id: string): Promise<ITransaction> => {
  try {
    const response: ApiResponse<ITransaction> = await apiClient.get(`/transactions/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error fetching transaction with id: ${id}`);
  }
};


export const createTransaction = async (transactionData: any): Promise<ITransaction> => {
  try {
    const response: ApiResponse<ITransaction> = await apiClient.post('/transactions', transactionData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error creating transaction");
  }
};


export const updateTransactionById = async (id: string, transactionData: any): Promise<ITransaction> => {
  try {
    const response: ApiResponse<ITransaction> = await apiClient.put(`/transactions/${id}`, transactionData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error updating transaction with id: ${id}`);
  }
};


export const deleteTransactionById = async (id: string): Promise<any> => {
  try {
    const response = await apiClient.delete(`/transactions/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || `Error deleting transaction with id: ${id}`);
  }
};

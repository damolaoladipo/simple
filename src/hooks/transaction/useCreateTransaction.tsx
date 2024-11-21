import { useState } from 'react';
import { createTransaction } from '../../api/transaction'; 
import { ITransaction } from '../../utils/transaction.util';

export const useCreateTransaction = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newTransaction, setNewTransaction] = useState<ITransaction | null>(null);

  const createNewTransaction = async (transactionData: any) => {
    setLoading(true);
    try {
      const createdTransaction = await createTransaction(transactionData);
      setNewTransaction(createdTransaction);
      
    } catch (err) {
      setError('Error creating transaction');
    } finally {
      setLoading(false);
    }
  };

  return { createNewTransaction, newTransaction, loading, error };
};

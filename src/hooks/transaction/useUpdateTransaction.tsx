import { useState } from 'react';
import { updateTransactionById } from '../../api/transaction'; 
import { ITransaction } from '../../utils/transaction.util'; 

export const useUpdateTransaction = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedTransaction, setUpdatedTransaction] = useState<ITransaction | null>(null);

  const updateTransaction = async (id: string, updatedData: any) => {
    setLoading(true);
    try { 
      const updated = await updateTransactionById(id, updatedData);
      setUpdatedTransaction(updated);
      
    } catch (err) {
      setError('Error updating transaction');
    } finally {
      setLoading(false);
    }
  };

  return { updateTransaction, updatedTransaction, loading, error };
};

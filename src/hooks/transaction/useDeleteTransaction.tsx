import { useState } from 'react';
import { deleteTransactionById } from '../../api/transaction';

export const useDeleteTransaction = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [DeletedTransaction, setDeletedTransaction] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const deleteTransaction = async (id: string) => {
    setLoading(true);
    try {

      const deleted = await deleteTransactionById(id);
      setDeletedTransaction(true);
      setMessage( deleted.message || 'Transaction deleted successfully');

    } catch (err) {
      setError('Error deleting transaction');
    } finally {
      setLoading(false);
    }
  };

  return { deleteTransaction, DeletedTransaction, message, loading, error };
};

import { useState } from 'react';
import { getUserTransactions } from '../../api/transaction'; 
import { ITransaction } from '../../utils/interface.util'; 

export const useTransactions = (userId: string) => {
  const [transactions, setTransactions] = useState<ITransaction[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    setLoading(true);

    try {
      const fetchedTransactions = await getUserTransactions(userId);
      setTransactions(fetchedTransactions);

    } catch (err) {
      setError('Error fetching transactions');
    } finally {
      setLoading(false);
    }
  };

  return { transactions, fetchTransactions, loading, error };
};

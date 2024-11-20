import { useState } from 'react';
import { getTransactionById } from '../../api/transaction'; 
import { ITransaction } from '../../utils/interface.util'; 

export const useTransaction = (id: string) => {
  const [transaction, setTransaction] = useState<ITransaction | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransaction = async () => {
    setLoading(true);

    try {
      const fetchedTransaction = await getTransactionById(id);
      setTransaction(fetchedTransaction);
      
    } catch (err) {
      setError('Error fetching transaction');
    } finally {
      setLoading(false);
    }
  };

  return { transaction, fetchTransaction, loading, error };
};

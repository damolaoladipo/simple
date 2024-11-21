import { createContext, useState } from "react";
import { ITransaction, TransactionContextType } from "../utils/interface.util";
import { useTransactions } from "../hooks/transaction/useTransactions";
import { useTransaction } from "../hooks/transaction/useTransaction";
import { useCreateTransaction } from "../hooks/transaction/useCreateTransaction";
import { useUpdateTransaction } from "../hooks/transaction/useUpdateTransaction";
import { useDeleteTransaction } from "../hooks/transaction/useDeleteTransaction";

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction | null>(null);

  const { transactions, fetchTransactions, loading: loadingTransactions, error: transactionsError } = useTransactions("");

  const { transaction, fetchTransaction, loading: loadingTransaction, error: transactionError } = useTransaction("");

  const { createNewTransaction, loading: creatingTransaction, error: createError } = useCreateTransaction();

  const { updateTransaction, loading: updatingTransaction, error: updateError } = useUpdateTransaction();

  const { deleteTransaction, loading: deletingTransaction, error: deleteError } = useDeleteTransaction();

  
  const value: TransactionContextType = {
    transaction,
    transactions,
    loading: loadingTransactions || loadingTransaction || creatingTransaction || updatingTransaction || deletingTransaction,
    error: transactionsError || transactionError || createError || updateError || deleteError,
    setTransaction: setSelectedTransaction,
    fetchTransactions: fetchTransactions,
    fetchTransactionById: fetchTransaction,
    createTransaction: createNewTransaction,
    updateTransaction: updateTransaction,
    deleteTransaction: deleteTransaction,
  };

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>;
};


export interface ITransaction {
    userId: string
    type: 'income' | 'expense'
    description: string
    amount: number
    category: string
    paymentMethod: 'cash' | 'credit card' | 'bank transfer' | 'mobile payment'
    status: 'completed' | 'pending' | 'failed'
    currency: string
  }

export interface TransactionContextType {
    transaction: ITransaction | null;
    transactions: ITransaction[] | null;
    selectedTransaction: ITransaction | null
    loading: boolean;
    error: string | null;
    fetchTransactions: (userId: string) => Promise<void>;
    fetchTransactionById: (transactionId: string) => Promise<void>;
    createTransaction: (transactionData: any) => Promise<void>;
    updateTransaction: (id: string, updatedData: any) => Promise<void>;
    deleteTransaction: (id: string) => Promise<void>;
    setTransaction: React.Dispatch<React.SetStateAction<ITransaction | null>>;
  }
  
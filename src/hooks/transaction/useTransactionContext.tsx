import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { TransactionContextType } from "../../utils/transaction.util";

export const useTransactionContext = (): TransactionContextType => {
    const context = useContext(TransactionContext);
    if (!context) {
      throw new Error("useTransactionContext must be used within an transactionProvider");
    }
    return context;
  };

import { ChangeEvent, RefObject } from "react";


export interface IStorage {
    keepData(key: string, data: object | string): void;
    fetchData(key: string): string | null;
  }
  
  export interface INoteStorage {
    keepNote(key: string, data: object | string): void;
    fetchNote(key: string): string | null;
  }
export interface ITitle {
    text: string;
    size?: string;
    color?: string;
    margin?: {
      top?: string;
      bottom?: string;
    };
  }
  
export interface ITextInput {
    type: "email" | "text" | "textarea";
    ref?: RefObject<HTMLInputElement>;
    showFocus?: boolean;
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    id?: string;
    hasIcon?: boolean;
    icon?: string;
    name?: string;
    placeholder?: string;
    value?: string
    autoComplete?: boolean;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
  }

export interface IPasswordInput {
    ref?: RefObject<HTMLInputElement>;
    showFocus?: boolean;
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    id?: string;
    hasIcon?: boolean;
    icon?: string;
    name?: string;
    placeholder?: string;
    autoComplete?: boolean;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
  }

export interface IButton {
    text: string;
    onClick(e: any): void;
  }
export interface IIconButton {
    width?: string;
    height?: string;
    icon: {
      type: "web" | "image";
      name?: string;
      url?: string;
      width?: string;
      height?: string;
    };
  }
  
export interface INavButton {
    link?: string,
    icon: string,
    text: string
  }
  
export type UserType = 'admin' | 'user';
export interface IUser {
    username:  string,
    displayName: string
    email: string,
    password: string
    badges: string[]
    achievement: string[]
    roles: string[]
    slug: string,
    userType: UserType;
  }

export interface ApiResponse<T> {
    data: T;
  }

export interface IRegister {
    username: string;
    displayName: string;
    email: string;
    password: string;
  }
  

export interface ILogin {
    email: string;
    password: string;
  }

export interface ILoginResponse {
    token: string;
    user: {
      id: string;
      username: string;
      email: string;
    };
  }
  
export interface IRegisterResponse {
    id: string;
    username: string;
    email: string;
  }
  
export interface ILogoutResponse {
    message: string;
  }

export interface IForgotPasswordRequest {
  email: string;
}

export interface IForgotPasswordResponse {
  message: string; 
}

export interface IResetPasswordRequest {
  token: string; 
  newPassword: string;
}


export interface IResetPasswordResponse {
  message: string; 
}


export interface AuthContextType {
    authToken: string | null;
    user: any | null;
    login: (authToken: string, user: any) => void;
    logout: (message: string) => void;
  }
export interface UserContextType {
    user: any | null;  
    users: any[];
    loading: boolean;
    error: string | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    updateUser: (userId: string, updatedData: any) => void;
    deleteUser: (userId: string) => void;
  }
  

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
    loading: boolean;
    error: string | null;
    fetchTransactions: (userId: string) => Promise<void>;
    fetchTransactionById: (transactionId: string) => Promise<void>;
    createTransaction: (transactionData: any) => Promise<void>;
    updateTransaction: (id: string, updatedData: any) => Promise<void>;
    deleteTransaction: (id: string) => Promise<void>;
    setTransaction: React.Dispatch<React.SetStateAction<ITransaction | null>>;
  }
  
  
  
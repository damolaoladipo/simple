import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useUsers } from '../../hooks/users/useUsers';
import { useUser } from '../../hooks/users/useUser';
import { useCreateUser } from '../../hooks/users/useCreateUser';
import { useUpdateUser } from '../../hooks/users/useUpdateuser';
import { useDeleteUser } from '../../hooks/users/useDeleteUser';


interface UserContextType {
  users: any[];
  loading: boolean;
  error: string | null;
  user: any | null;
  createUser: (userData: any) => void;
  updateUser: (userId: string, updatedData: any) => void;
  deleteUser: (userId: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { users, loading, error } = useUsers();
  const { user, setUser } = useState<any | null>(null);
  
  const { createUser } = useCreateUser();
  const { updateUser } = useUpdateUser();
  const { deleteUser } = useDeleteUser();

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        user,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

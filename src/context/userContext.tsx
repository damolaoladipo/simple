import React, { createContext, ReactNode } from 'react';
import { UserContextType } from '../utils/interface.util';

import { useUsers } from '../hooks/user/useUsers';
import { useUser } from '../hooks/user/useUser';
import { useCreateUser } from '../hooks/user/useCreateUser';
import { useUpdateUser } from '../hooks/user/useUpdateuser';
import { useDeleteUser } from '../hooks/user/useDeleteUser';





export const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({ children, userId }: { children: ReactNode, userId: string }) => {
  const { users, loading, error } = useUsers();
  const { user, loading: userLoading, error: userError } = useUser(userId)
  
  const { createUser } = useCreateUser();
  const { updateUser } = useUpdateUser();
  const { deleteUser } = useDeleteUser();

  return (
    <UserContext.Provider
      value={{
        users,
        loading: loading || userLoading,
        error: error || userError,
        user,
        setUser: () => {},
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, ReactNode } from 'react';
import { IUser, UserContextType } from '../utils/user.util';

import { useUsers } from '../hooks/user/useUsers';
import { useUser } from '../hooks/user/useUser';
import { useUpdateUser } from '../hooks/user/useUpdateuser';
import { useDeleteUser } from '../hooks/user/useDeleteUser';





export const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider = ({ children, userId }: { children: ReactNode, userId: string }) => {
  
  const [ userState, setUser] = React.useState<IUser | null>(null);
  const { user, loading: userLoading, error: userError } = useUser(userId)
  const { users, loading: usersLoading, error: usersError } = useUsers();
  const { updateUser, updatedUser, loading: updatedUserLoading, error: updatedUserError } = useUpdateUser();
  const { deleteUser, response, loading: deleteUserLoading, error: deleteUserError } = useDeleteUser();

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        userState,
        loading: userLoading || usersLoading || updatedUserLoading || deleteUserLoading,
        error: userError || usersError || updatedUserError || deleteUserError,
        response,
        updatedUser,
        setUser: setUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

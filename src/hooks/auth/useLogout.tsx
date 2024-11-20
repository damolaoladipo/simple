import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { logout } = useAuthContext();

  const logoutUser = () => {
    logout();
  };

  return { logoutUser };
};

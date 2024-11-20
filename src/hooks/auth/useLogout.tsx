import { useAuth } from "../../context/authContext";

export const useLogout = () => {
  const { logout } = useAuth();

  const logoutUser = () => {
    logout();
  };

  return { logoutUser };
};

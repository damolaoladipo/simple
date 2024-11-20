import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../utils/interface.util";


export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
  };
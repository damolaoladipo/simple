import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { UserContextType } from "../../utils/interface.util";

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUserContext must be used within an userContextProvider");
    }
    return context;
  };


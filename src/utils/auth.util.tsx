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
    loading: boolean;
    error: string | null;
    response: IRegisterResponse | ILoginResponse | string | null; 
    register: (userData: IRegister) => Promise<void>; 
    forgotPassword: (email: string) => Promise<void>; 
    resetPassword: (token: string, newPassword: string) => Promise<void>;
    login: (loginData: ILogin) => void;
    logout: (message: string) => void;
  }

  

  
  
  
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


export interface UserContextType {
    user: any | null;  
    users: any[];
    userState: IUser | null
    loading: boolean;
    error: string | null;
    response: string | null
    updatedUser: IUser | null; 
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    updateUser: (userId: string, updatedData: any) => void;
    deleteUser: (userId: string) => void;
    
  }
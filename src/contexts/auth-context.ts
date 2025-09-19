import { createContext } from 'react';

export interface User {
  email: string;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const authContextDefaultValue: AuthContextType = {
  user: null,
  signIn: async () => {},
  signOut: () => {},
  isAuthenticated: false,
};

import { useState, ReactNode } from 'react';
import { AuthContext, User } from '@/contexts/auth-context';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    // TODO: Replace with actual authentication logic
    // For now, we'll just simulate a successful sign-in
    setUser({ email });
    // Store auth state in localStorage
    localStorage.setItem('auth', JSON.stringify({ email }));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
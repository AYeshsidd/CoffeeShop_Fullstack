'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import apiFetch from './api-client';

interface User { // loggedin user information
  id: number;
  full_name: string;
  email: string;
}

interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  setSession: (tokens: AuthTokens) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const setSession = async (tokens: AuthTokens) => {
    setAccessToken(tokens.access_token);
    const me = await apiFetch<User>('/auth/me', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    setUser(me);
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, setSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
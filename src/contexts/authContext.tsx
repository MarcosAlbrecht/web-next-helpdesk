// src/context/AuthContext.tsx
"use client";
import { User } from "@/types/user";
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticating: boolean; // Novo estado
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  isAuthenticating: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true); // Inicia como true

  const value = {
    user,
    setUser,
    isAuthenticating,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook customizado para acesso fácil
export function useAuth() {
  return useContext(AuthContext);
}

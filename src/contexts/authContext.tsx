"use client";
import { useRouter } from "next/navigation";

import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

import { api } from "@/lib/api";
import { recoverUserInformation, signInRequest } from "@/lib/auth/auth";
import { User } from "@/lib/auth/types/user";

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

import { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    console.log("EFFECT: ", token);
    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    } else {
      router.push("/login");
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nextauth.token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
      path: "/",
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    router.push("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

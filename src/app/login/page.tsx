"use client";
import { LoginForm } from "@/components/login-form";
import { AuthContext } from "@/contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation"; // Import corrigido
import { useContext } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter(); // Instância correta do router
  const { signIn } = useContext(AuthContext);

  const onSubmit = async (email: string, password: string) => {
    try {
      await signIn({ email, password });
    } catch (error) {
      return error;
    }
  };

  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await signIn({ email, password });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      // Se quiser, pode redirecionar ou mostrar toast de sucesso aqui
    },
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm
          loading={mutation.isPending}
          onSubmit={(email, password) => mutation.mutate({ email, password })}
        />
      </div>
    </div>
  );
}

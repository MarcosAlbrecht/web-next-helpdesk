"use client";
import { LoginForm } from "@/components/login-form";
import { useRouter } from "next/navigation"; // Import corrigido

export default function LoginPage() {
  const router = useRouter(); // Instância correta do router

  const onSubmit = async (email: string, password: string) => {
    try {
      console.log(`entrou no submit`, email);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm onSubmit={(email, password) => onSubmit(email, password)} />
      </div>
    </div>
  );
}

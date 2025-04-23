import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function UsersPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Usuários</h1>
      <div className="flex gap-4 border-b-2 pb-2">
        <Link href="/user/upsert" className="text-blue-500 font-medium">
          <Button className="bg-blue-500">
            <Plus scale={36} /> Cadastrar
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        <p>Lista de usuários será exibida aqui...</p>
      </div>
    </>
  );
}

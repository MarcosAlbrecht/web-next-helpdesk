// hooks/useAuth.ts

import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await api.get("/me");
      return response.data;
    },
    retry: false, // não tenta refazer se der erro (ex: 401)
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

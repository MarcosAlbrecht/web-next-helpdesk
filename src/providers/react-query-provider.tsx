// src/providers/react-query-provider.tsx
"use client";

import { queryClient } from "@/lib/react-query";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={{}}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}

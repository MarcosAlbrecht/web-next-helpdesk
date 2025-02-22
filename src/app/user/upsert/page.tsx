"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toogle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, SaveIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Users() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Nome precisa no mínimo 2 caracteres.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    values.username = "";
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/user">Usuários</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Cadastrar/Editar</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">Cadastrar de Usuários</h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="flex gap-2 border-b-2 pb-2">
                    <Link href="/user" className="text-blue-500 font-medium">
                      <Button variant="outline" size="icon">
                        <ChevronLeft />
                      </Button>
                    </Link>

                    <Button className="bg-blue-500" type="submit">
                      <SaveIcon scale={36} /> Gravar
                    </Button>

                    <Link href="/user" className="text-blue-500 font-medium">
                      <Button className="bg-red-500">
                        <XIcon scale={36} /> Cancelar
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-4">
                    {/* Aqui poderia exibir a lista de usuários */}

                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* <Button type="submit">Submit</Button> */}
                    {/* <Button type="submit">Cancelar</Button> */}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

"use client";

import {
  AudioWaveform,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  HomeIcon,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Tickets",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Tickets",
          url: "/ticket/all",
        },
        {
          title: "Meus Tickets",
          url: "/ticket/my",
        },
      ],
    },
    {
      title: "Cadastros",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Usuarios",
          url: "/user",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { user } = useContext(AuthContext);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuItem key="Dashboard" className="px-2 list-none">
          <SidebarMenuButton
            asChild
            className={
              pathname === "/"
                ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white" // Cor de fundo e texto para o item ativo
                : "hover:bg-blue-100 hover:text-black-100" // Cor de fundo e texto para o item inativo
            }
          >
            <Link href="/dashboard">
              <HomeIcon />
              <span> Dashboard</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <NavMain items={data.navMain} pathname={pathname} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user!} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

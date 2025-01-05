"use client";

import * as React from "react";

import { type SignOut } from "@/auth";
import { type User } from "next-auth";

import { Command, ChartArea, Link, Earth } from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";

import { NavUser } from "@/components/sidebar/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({
  signOut,
  user,
  allSlug,
}: {
  signOut: SignOut;
  user: User;
  allSlug: {
    slug: string;
    originalUrl: string;
  }[];
}) {
  const memoData = React.useMemo(() => {
    const data = {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      navMain: [
        {
          title: "Links",
          url: "/app/links",
          icon: Link,
        },

        {
          title: "Analytics",
          url: "/app/analytics",
          icon: ChartArea,
          isCollapsable: true,
          isActive: true,
          items: allSlug.map((slug) => ({
            title: slug.slug,
            url: `/app/analytics/${slug.slug}`,
            iconUrl: slug.originalUrl,
          })),
        },
      ],
    };

    return data;
  }, [allSlug]);

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Sharefiy</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={memoData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} signOut={signOut} />
      </SidebarFooter>
    </Sidebar>
  );
}

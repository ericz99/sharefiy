"use client";

import Image from "next/image";

import { ChevronsUpDown, CreditCard, LogOut, User2 } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { type User } from "next-auth";
import { type SignOut } from "@/auth";
import { useMemo } from "react";
import Link from "next/link";

const data = [
  {
    title: "Profile",
    url: "/app/settings/profile",
    icon: User2,
  },

  {
    title: "Billing",
    url: "/app/settings/billing",
    icon: CreditCard,
  },
];

export function NavUser({ user, signOut }: { user: User; signOut: SignOut }) {
  const { isMobile } = useSidebar();

  const fullInitialName = useMemo(() => {
    return user.name && user.name.split(" ").join("+");
  }, [user]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {user.image ? (
                  <Image
                    src={user.image!}
                    alt={user.name!}
                    width="32"
                    height="32"
                  />
                ) : (
                  <Image
                    src={`https://ui-avatars.com/api/?name=${fullInitialName}size=250`}
                    alt="default__placeholder"
                    width="32"
                    height="32"
                  />
                )}
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {user.image ? (
                    <Image
                      src={user.image!}
                      alt={user.name!}
                      width="32"
                      height="32"
                    />
                  ) : (
                    <Image
                      src={`https://ui-avatars.com/api/?name=${fullInitialName}size=250`}
                      alt="default__placeholder"
                      width="32"
                      height="32"
                    />
                  )}
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {data.map((d, i) => (
              <DropdownMenuGroup key={i}>
                <DropdownMenuItem>
                  <Link href={d.url} className="flex gap-2">
                    <d.icon />
                    {d.title}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                signOut({
                  redirectTo: "/auth/login",
                })
              }
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

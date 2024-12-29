import React from "react";

import { signOut } from "./action";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { AppSidebar } from "@/components/sidebar/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getAllSlug } from "@/prisma/db/analytics";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || !session.user) redirect("/auth/login");

  const { id } = session.user;

  const slugs = await getAllSlug(id!);

  return (
    <SidebarProvider>
      <AppSidebar user={session.user} signOut={signOut} allSlug={slugs} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

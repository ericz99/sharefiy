"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import Link from "next/link";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn, getFaviconImage } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url?: string;
    icon: LucideIcon;
    isActive?: boolean;
    isDisabled?: boolean;
    isCollapsable?: boolean;
    items?: {
      title: string;
      url: string;
      iconUrl?: string;
    }[];
  }[];
}) {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem key={item.url}>
              {!item.isCollapsable && (
                <SidebarMenuButton asChild tooltip={item.title}>
                  {item.url ? (
                    <Link
                      href={item.url}
                      className={cn(
                        "text-base transition-all font-normal ease-in-out duration-75 rounded-md p-2 flex items-center gap-3 text-zinc-400",
                        `${
                          activeTab == item.url
                            ? "text-black bg-zinc-200 font-semibold"
                            : "hover:bg-zinc-100/80 hover:text-black"
                        }`,
                        `${item.isDisabled ? "pointer-events-none" : ""}`
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <div>
                      <item.icon />
                      <span>{item.title}</span>
                    </div>
                  )}
                </SidebarMenuButton>
              )}

              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <div>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <div className="text-zinc-400">
                          <item.icon />
                          <span>{item.title}</span>
                        </div>
                      </SidebarMenuButton>

                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="gap-2 mt-2">
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              href={subItem.url}
                              className={cn(
                                "text-base transition-all font-normal ease-in-out duration-75 rounded-md p-2 flex items-center gap-3 text-zinc-400",
                                `${
                                  activeTab == subItem.url
                                    ? "text-black bg-zinc-200 font-semibold"
                                    : "hover:bg-zinc-100/80 hover:text-black"
                                }`
                              )}
                            >
                              {subItem.iconUrl && (
                                <img
                                  src={getFaviconImage(subItem.iconUrl)}
                                  alt="favicon"
                                  className="h-4 w-4"
                                />
                              )}

                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

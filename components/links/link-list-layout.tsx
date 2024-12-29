import React from "react";
import Image from "next/image";

import { Edit } from "lucide-react";
import type { Link } from "@prisma/client";

import { Button } from "@/components/ui/button";

import LinkCreationForm from "./link-creation-form";
import { Badge } from "@/components/ui/badge";
import LinkListItem from "./link-list-item";

interface LinkListLayoutProps {
  createOrUpdateLink: (data: {
    originalUrl: string;
    slug: string;
    isActive?: boolean;
  }) => Promise<void>;

  links: Link[];
}

export default function LinkListLayout({
  createOrUpdateLink,
  links,
}: LinkListLayoutProps) {
  return (
    <div className="h-full flex flex-1 flex-col relative border border-solid border-zinc-200 bg-zinc-50 rounded-md p-4 mt-6">
      {links.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <Image
            src="/empty_list.svg"
            alt="empty__list_design"
            width="300"
            height="300"
            className="mb-4"
          />

          <div className="flex flex-col gap-2 items-center mb-4">
            <h1 className="text-3xl font-bold">You don't have any links yet</h1>
            <p className="text-zinc-700 text-sm font-sans">
              Start tracking links by clicking 'Create Link'
            </p>
          </div>

          <LinkCreationForm createOrUpdateLink={createOrUpdateLink} />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {links.map((link: Link) => (
            <LinkListItem
              key={link.id}
              link={link}
              createOrUpdateLink={createOrUpdateLink}
            />
          ))}
        </div>
      )}
    </div>
  );
}

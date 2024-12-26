import React from "react";
import LinkCreationForm from "./link-creation-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link as PrismaLink } from "@prisma/client";
import { Edit, ChartColumn, View } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

interface LinkListItemProps {
  link: PrismaLink;
  createOrUpdateLink: (data: {
    originalUrl: string;
    slug: string;
    isActive?: boolean;
  }) => Promise<void>;
}

export default function LinkListItem({
  link,
  createOrUpdateLink,
}: LinkListItemProps) {
  return (
    <div
      key={link.id}
      className="flex flex-col gap-2 border border-solid border-zinc-200 rounded-md p-4 shadow-sm bg-white"
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col justify-between items-start">
          {link.isActive ? (
            <Badge variant="active">Active</Badge>
          ) : (
            <Badge variant="inactive">Inactive</Badge>
          )}

          <p className="text-lg font-semibold">{link.slug}</p>
          <p className="text-sm text-zinc-700">{link.originalUrl}</p>
        </div>

        <div className="flex gap-2">
          <Button
            variant={"outline"}
            className="flex gap-4"
            size="icon"
            asChild
          >
            <Link href={`/${link.slug}`} target="_blank">
              <View size={16} />
            </Link>
          </Button>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"outline"}
                  className="flex gap-4"
                  size="icon"
                  asChild
                >
                  <Link href={`/app/analytics/${link.slug}`}>
                    <ChartColumn size={16} />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Analytic</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <LinkCreationForm
            createOrUpdateLink={createOrUpdateLink}
            initialData={link}
            isEditMode={true}
          >
            <Button variant="outline" className="flex gap-4" size="icon">
              <Edit size={16} />
            </Button>
          </LinkCreationForm>
        </div>
      </div>
    </div>
  );
}

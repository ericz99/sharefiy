import React from "react";
import LinkCreationForm from "./link-creation-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link as PrismaLink } from "@prisma/client";
import { Edit, ChartColumn, View, Link2 } from "lucide-react";

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
    isEditMode?: boolean;
    id?: string;
  }) => Promise<
    | {
        error: string;
      }
    | undefined
  >;

  checkSlugAvailability: (slug: string) => Promise<boolean>;
}

export default function LinkListItem({
  link,
  createOrUpdateLink,
  checkSlugAvailability,
}: LinkListItemProps) {
  return (
    <div
      key={link.id}
      className="flex flex-col gap-2 border border-solid border-zinc-200 rounded-md p-4 shadow-sm bg-white"
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col justify-between items-start gap-2">
          <div className="flex items-center gap-2">
            <Link2 size={16} className="text-zinc-500a" />

            <p className="text-lg font-semibold">{link.slug}</p>

            {link.isActive ? (
              <Badge variant="active">Active</Badge>
            ) : (
              <Badge variant="inactive">Inactive</Badge>
            )}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-zinc-500 truncate">{link.originalUrl}</p>
            <div className="hidden sm:flex items-center gap-4 text-sm text-zinc-500">
              {/* <span>0 clicks</span> */}
              {/* <span>Last clicked 2 minutes ago</span> */}
            </div>
          </div>
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
            checkSlugAvailability={checkSlugAvailability}
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

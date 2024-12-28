"use client";

import React from "react";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getFaviconImage } from "@/lib/utils";

interface AnalyticHeaderProps {
  currentSlug: string;
  allSlug: {
    slug: string;
    originalUrl: string;
  }[];
}

export default function AnalyticHeader({
  currentSlug,
  allSlug,
}: AnalyticHeaderProps) {
  const currentSlugData = allSlug.find((slug) => slug.slug === currentSlug);

  return (
    <div className="flex gap-2 mb-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline" className="gap-2 capitalize">
            {currentSlugData && (
              <img
                src={getFaviconImage(currentSlugData.originalUrl)}
                alt="favicon"
                className="h-4 w-4 mr-2"
              />
            )}

            {currentSlug}
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {allSlug.map((slug) => (
            <DropdownMenuItem key={slug.slug} asChild>
              <Link href={`/app/analytics/${slug.slug}`}>
                <img
                  src={getFaviconImage(slug.originalUrl)}
                  alt="favicon"
                  className="h-4 w-4"
                />

                {slug.slug}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

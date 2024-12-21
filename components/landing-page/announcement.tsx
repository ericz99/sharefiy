"use client";

import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnnouncementProps {
  message: string;
  external_link: string;
  className?: string;
}

export function Announcement({
  message,
  external_link,
  className,
}: AnnouncementProps) {
  return (
    <div className="flex mx-auto max-w-7xl items-center justify-center p-8 relative w-full text-white">
      <div
        className={cn(
          "flex items-center justify-center bg-orange-600 p-1 w-full rounded-lg hover:bg-orange-500 transition-all ease-in-out duration-75",
          className
        )}
      >
        <Link
          href={external_link}
          className="flex-1 flex items-center justify-center gap-2 text-xs lg:text-sm"
          target="_blank"
        >
          {message}

          <ArrowRight size={18} />
        </Link>

        <Button size={"icon"} variant={"ghost"}>
          <X size={18} />
        </Button>
      </div>
    </div>
  );
}

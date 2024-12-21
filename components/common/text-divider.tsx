import React from "react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface TextDividerProps {
  text: string;
  className?: string;
}

export function TextDivider({ text, className = "" }: TextDividerProps) {
  return (
    <div
      className={cn(
        className,
        "flex items-center align-center text-center w-full flex-row"
      )}
    >
      <div className="flex-grow">
        <Separator />
      </div>

      <span className="flex-shrink-0 text-sm font-medium text-muted-foreground px-2 whitespace-nowrap">
        {text}
      </span>

      <div className="flex-grow">
        <Separator />
      </div>
    </div>
  );
}

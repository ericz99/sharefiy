import React from "react";

import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import LinkCreationForm from "./link-creation-form";
import { Input } from "@/components/ui/input";

interface LinkControllerProps {
  createOrUpdateLink: (data: {
    originalUrl: string;
    slug: string;
    isActive?: boolean;
  }) => Promise<void>;
}

export default function LinkController({
  createOrUpdateLink,
}: LinkControllerProps) {
  return (
    <div className="flex gap-4 relative justify-between">
      <div className="flex w-full gap-2">
        <div className="max-w-sm w-full">
          <Input type="text" placeholder="Search by link" />
        </div>

        <Button variant="outline" className="flex gap-4">
          <Filter size={16} />
          Filter
        </Button>
      </div>

      <LinkCreationForm createOrUpdateLink={createOrUpdateLink} />
    </div>
  );
}

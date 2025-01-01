"use client";

import { useState } from "react";

import { Filter, Search } from "lucide-react";

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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex gap-4 relative justify-between">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search links..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <LinkCreationForm createOrUpdateLink={createOrUpdateLink} />
    </div>
  );
}

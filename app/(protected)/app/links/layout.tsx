import React from "react";

import { Link } from "lucide-react";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative pt-4 h-full flex flex-col p-4 max-w-screen-xl container mx-auto w-full">
      <div className="flex flex-col justify-between relative w-full mb-4">
        <div className="flex items-center gap-2 relative">
          <div className="border border-solid rounded-lg border-zinc-200 bg-zinc-200 p-1">
            <Link size={18} />
          </div>
          <h1 className="text-xl font-semibold">Track Links</h1>
        </div>
      </div>

      {children}
    </div>
  );
}

"use client";

import React from "react";
import { waitingListTitle } from "@/config/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WaitlistDemo() {
  return (
    <div className="absolute top-0 -left-24 w-full mx-auto max-w-5xl text-center">
      <div className="py-4 px-8 lg:px-4 rounded-xl bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-900">
        <div className="flex flex-col gap-4">
          <h1 className="mx-auto max-w-4xl text-2xl font-black text-white mt-6">
            {waitingListTitle}
          </h1>
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 relative mt-8">
          <Input
            type="text"
            className="border-solid border-zinc-200 bg-white text-black text-base"
            placeholder="Email"
            disabled
          />

          <Button
            variant={"outline"}
            className="rounded-lg text-black w-full"
            disabled
          >
            Remind Me
          </Button>
        </div>
      </div>
    </div>
  );
}

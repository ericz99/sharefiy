"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { waitingListTitle, waitingListDescription } from "@/config/config";

export function Waitlist() {
  return (
    <div className="relative lg:my-12 w-full mx-auto max-w-5xl py-16 px-8 lg:px-0 text-center">
      <div className="py-12 lg:py-16 px-8 lg:px-4 rounded-xl bg-gradient-to-b from-blue-900 via-blue-900 to-blue-500">
        <div className="flex flex-col gap-8">
          <h1 className="mx-auto max-w-4xl text-4xl lg:text-5xl font-black text-white mt-6">
            {waitingListTitle}
          </h1>

          <p className="max-w-2xl mx-auto text-base lg:text-lg font-light text-white">
            {waitingListDescription}
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 relative mt-12">
          <Input
            type="text"
            className="border-solid border-zinc-200 bg-white text-black h-12 text-base"
            placeholder="Full Name"
          />

          <Input
            type="text"
            className="border-solid border-zinc-200 bg-white text-black h-12 text-base"
            placeholder="Email"
          />

          <Button
            variant={"default"}
            className="rounded-lg text-white h-12 w-full"
          >
            Remind Me
          </Button>
        </div>
      </div>
    </div>
  );
}

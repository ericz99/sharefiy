/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Zap, Gift } from "lucide-react";
import DotPattern from "../ui/dot-pattern";
import { Button } from "../ui/button";
import { PulsatingButton } from "../ui/pulsating-button";

export function CTA() {
  return (
    <div className="flex flex-col gap-8 mx-auto items-center justify-center p-12 relative w-full bg-gradient-to-r from-indigo-600 to-blue-900">
      <h1 className="z-10 whitespace-pre-wrap text-center max-w-3xl text-3xl lg:text-5xl font-bold tracking-tighter text-white dark:text-white">
        Don't overthink, we've got you covered on everything you need.
      </h1>

      <PulsatingButton>
        <Zap color="#03045e" size={20} className="mr-2" />
        Get ShipNow
      </PulsatingButton>

      <div className="text-sm text-white flex">
        <p className="mr-2 flex gap-1">
          <Gift size={20} color="#c1fba4" />
          <strong className="text-[#c1fba4]">$100 off</strong>
        </p>
        for the first 1000 customer (500 left)
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}

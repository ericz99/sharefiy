"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { FeatureSlider } from "@/components/landing-page/features-slider";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { PulsatingButton } from "../ui/pulsating-button";

//👇 Configure our font object
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export function TwoColumnHero() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32 pt-20 text-center lg:pt-44">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-8">
        <div className="relative flex flex-col gap-4 text-left px-4">
          <h1
            className={cn(
              "text-blue-950 text-6xl font-semibold",
              montserrat.className
            )}
          >
            Launch Your SaaS Startup
            <span className="ml-4 mt-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-950 relative inline-block">
              <span className="relative text-white">in a Day</span>
            </span>
          </h1>
          <p className="text-zinc-600 text-lg font-light">
            ShipNow is a full-stack, production ready Next.js SaaS boilerplate
            and starter kit. Tailored for optimal developer experience, front
            and back-end functionality, integrations and more.
          </p>

          <p className="text-zinc-600 text-lg font-light">
            Built with the latest tools and technologies, and featuring seamless
            one-click deployment option — Stand Out, Launch Fast⚡
          </p>

          <div className="mt-4 flex gap-4 items-center">
            <PulsatingButton className="bg-sky-900 text-white">
              Get Ship Now
              <ChevronRight size={20} />
            </PulsatingButton>

            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />

            <div className="flex flex-col gap-2">
              <div className="flex">
                <Rating />
                <Rating />
                <Rating />
                <Rating />
                <Rating />
              </div>

              <p className="text-xs text-zinc-950 ml-1 font-base">
                100+ SaaS Already Launched!
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative px-4">
          <FeatureSlider />
        </div>
      </div>
    </div>
  );
}

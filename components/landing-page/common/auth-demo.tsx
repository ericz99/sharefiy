"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    title: "Magic Link",
    img: "/next.svg",
    className: "bg-zinc-100",
  },
  {
    title: "Google OAuth",
    img: "/google-logo.png",
    className: "bg-purple-100",
  },
  {
    title: "Supabase Auth",
    img: "/supabase-logo.svg",
    className: "bg-zinc-100",
  },
  {
    title: "Email & Password login",
    img: "/prisma-3.svg",
    className: "bg-zinc-100",
  },
];

const FeatureCard = ({
  img,
  title,
  className,
}: {
  img: string;
  title: string;
  className: string;
}) => {
  return (
    <figure className="flex flex-shrink-0 items-center gap-4 whitespace-nowrap rounded-[14px] bg-white py-3.5 pl-5 pr-6 shadow-lg dark:bg-white/15">
      <div
        className={cn(
          "aspect-square w-full max-w-[64px] rounded-lg p-2 bg-gray-400 flex flex-col items-center justify-center",
          className
        )}
      >
        <Image width="64" height="64" alt="" src={img} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-lg font-bold text-zinc-800">{title}</h1>
      </div>
    </figure>
  );
};

export function AuthDemo() {
  return (
    <div className="absolute top-20">
      <Marquee pauseOnHover={false} className="[--duration:25s]">
        {features.map((feat) => (
          <FeatureCard key={feat.title} {...feat} />
        ))}
      </Marquee>
    </div>
  );
}

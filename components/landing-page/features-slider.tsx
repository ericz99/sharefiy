"use client";

import React from "react";
import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Next.js",
    body: "Built with Next.js 14",
    img: "/next.svg",
    className: "bg-zinc-100",
  },
  {
    title: "Stripe",
    body: "Subscription | Payment Gateway",
    img: "/stripe-logo.png",
    className: "bg-purple-100",
  },
  {
    title: "Tailwind",
    body: "Custom Component",
    img: "/tailwind-logo.svg",
    className: "bg-zinc-100",
  },
  {
    title: "Prisma",
    body: "MySQL | PostgreSQL",
    img: "/prisma-3.svg",
    className: "bg-zinc-100",
  },
  {
    title: "Resend",
    body: "Transactional Emails",
    img: "/resend-icon-white-logo.svg",
    className: "bg-black",
  },
  {
    title: "PostHog",
    body: "All in One Analytic",
    img: "/posthog-logo.svg",
    className: "bg-cyan-800",
  },
  {
    title: "Supabase Auth",
    body: "Magic Link | Social",
    img: "/supabase-logo.svg",
    className: "bg-green-800",
  },
];

const FeatureCard = ({
  img,
  title,
  body,
  className,
}: {
  img: string;
  title: string;
  body: string;
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
        <p className="text-base text-zinc-400">{body}</p>
      </div>
    </figure>
  );
};

const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);

export function FeatureSlider() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-r from-violet-200 to-pink-200 py-16">
      <Marquee pauseOnHover={false} className="[--duration:25s]">
        {firstRow.map((feat) => (
          <FeatureCard key={feat.title} {...feat} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover={false} className="[--duration:35s]">
        {secondRow.map((feat) => (
          <FeatureCard key={feat.title} {...feat} />
        ))}
      </Marquee>

      <Marquee pauseOnHover={false} className="[--duration:20s]">
        {firstRow.map((feat) => (
          <FeatureCard key={feat.title} {...feat} />
        ))}
      </Marquee>
    </div>
  );
}

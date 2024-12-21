"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { TestimonialSmall } from "@/components/landing-page/testimonial-small";

export function HeroWithImage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32 pt-20 text-center lg:pt-32 relative">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 lg:text-7xl relative">
          Launch{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-300 relative inline-block">
            <span className="relative text-white">fast</span>
          </span>{" "}
          with production-ready boilerplate
        </h1>
      </div>

      <p className="mx-auto mt-4 max-w-2xl text-base lg:text-lg tracking-tight font-medium text-slate-700 relative">
        Say goodbye to weeks of waiting. With our streamlined process, launch
        your business in days, soaring past the competition.
      </p>

      <div className="flex justify-center items-center gap-4 mt-6 mb-4">
        <Button
          asChild
          size={"lg"}
          variant={"pill"}
          className="bg-orange-300 hover:bg-orange-300/80 border border-solid rounded-lg h-12"
        >
          <Link href="/login">Get ShipNow</Link>
        </Button>
      </div>

      <TestimonialSmall />

      <div className="relative bg-white">
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="relative">
              <Image
                src={"/demo-v1.png"}
                alt="demo-v1"
                height="500"
                width="2432"
                decoding="async"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
            <div className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroWithVideo() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32 pt-20 text-center lg:pt-32 relative">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 lg:text-7xl">
          Launch fast with production-ready boilerplate
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

      <div className="relative bg-white">
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center cursor-pointer">
            <div className="relative">
              <Image
                src={"/demo-v1.png"}
                alt="demo-v1"
                height="1442"
                width="2432"
                decoding="async"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-100 hover:opacity-50 cursor-pointer"
              />

              <div className="absolute inset-0 bg-white-500 hover:bg-slate-50 opacity-50 flex items-center justify-center rounded-xl transition-opacity duration-300">
                <div className="bg-black rounded-full p-4 -mt-24 opacity-100">
                  <PlayCircle className="text-white w-12 h-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-20 xl:w-20" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

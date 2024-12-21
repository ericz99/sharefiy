/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FAQ as faq } from "@/config/faq";

export function FAQ() {
  return (
    <div className="w-full mx-auto max-w-5xl p-8 relative lg:my-8" id="faq">
      <div className="p-8 rounded-lg">
        <div className="flex flex-col gap-4 mb-12 lg:mb-28">
          <h1 className="mb-4.5 text-center text-3xl font-black tracking-[-.5px] text-dark dark:text-white sm:text-4xl md:text-[44px]/[50px]">
            Frequently asked questions
          </h1>

          <p className="text-base text-body dark:text-gray-4 mx-auto text-center">
            Frequently asked questions{" "}
            <strong className="font-black text-orange-300">
              <Link href="#">eric@ship.now</Link>
            </strong>
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.map((f, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-zinc-100 block rounded-lg"
            >
              <AccordionTrigger className="border-b border-solid border-white">
                {f.question}
              </AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

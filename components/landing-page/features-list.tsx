import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { FeaturesItem, FeaturesListProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const featureList: FeaturesItem[] = [
  {
    title: "Landing Page",
    description:
      "Composable and customizable pages, with all you need to showcase and sell your product.",
    list: ["Landing Page", "Waitlist", "Pre-sale", "...Many more"],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "20 Hours Saved",
      custom_component: null,
    },
  },
  {
    title: "Payment",
    description:
      "Start collecting payments (subscriptions and one-time purchases) in minutes. Powered by Stripe you don't need to deal with international taxation anymore.",
    list: [
      "One time payment",
      "Subscription webhooks",
      "Stripe Checkout Portal",
      "Pricing Page",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "4 Hours Saved",
      custom_component: (
        <div className="border-t border-solid p-4 border-zinc-200 justify-center flex items-center mt-4">
          <Image
            src="/stripe-logo.png"
            alt="stripe_logo"
            height="75"
            width="75"
            decoding="async"
          />

          <p className="text-sm text-zinc-500">
            Powered by{" "}
            <Link
              href="https://stripe.com/"
              target="_blank"
              className="transition-all ease-in-out duration-75 hover:text-zinc-800"
            >
              <strong>Stripe</strong>
            </Link>
          </p>
        </div>
      ),
    },
  },
  {
    title: "Authentication",
    description: "User authentication finally made easy.",
    list: [
      "Custom Login / Register Page",
      "Magic Link",
      "Social Login (Google, Facebook, X, ...)",
      "Save user to the Database",
      "Custom API handler",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "10 Hours Saved",
      custom_component: (
        <div className="border-t border-solid p-4 border-zinc-200 justify-center flex items-center mt-4">
          <Image
            src="/supabase-logo.svg"
            alt="stripe_logo"
            height="35"
            width="35"
            decoding="async"
            className="mr-4"
          />

          <p className="text-sm text-zinc-500">
            Powered by{" "}
            <Link
              href="https://supabase.com/"
              target="_blank"
              className="transition-all ease-in-out duration-75 hover:text-zinc-800"
            >
              <strong>Supabase</strong>
            </Link>
          </p>
        </div>
      ),
    },
  },
  {
    title: "Email",
    description:
      "Create your product newsletter and send transactional emails.",
    list: [
      "Use MailChimp, Loops, or any other service",
      "Send transactional emails when specific events occur",
      "Ready for product updates and email drips",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "6 Hours Saved",
      custom_component: (
        <div className="border-t border-solid p-4 border-zinc-200 justify-center flex items-center mt-4">
          <Image
            src="/mailgun-logo.svg"
            alt="stripe_logo"
            height="35"
            width="35"
            decoding="async"
            className="mr-4"
          />

          <p className="text-sm text-zinc-500">
            Powered by{" "}
            <Link
              href="https://mailgun.com/"
              target="_blank"
              className="transition-all ease-in-out duration-75 hover:text-zinc-800"
            >
              <strong>Mailgun</strong>
            </Link>
          </p>
        </div>
      ),
    },
  },
  {
    title: "Database",
    description:
      "Use your favorite database. And with Prisma, you don't need to know SQL.",
    list: [
      "Choose your database (MySQL and MongoDB)",
      "Database schema with Prisma",
      "Simplified data transactions",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "10 Hours Saved",
      custom_component: (
        <div className="border-t border-solid p-4 border-zinc-200 justify-center flex items-center mt-4">
          <Image
            src="/prisma-3.svg"
            alt="stripe_logo"
            height="35"
            width="35"
            decoding="async"
            className="mr-4"
          />

          <p className="text-sm text-zinc-500">
            Powered by{" "}
            <Link
              href="https://prisma.io/"
              target="_blank"
              className="transition-all ease-in-out duration-75 hover:text-zinc-800"
            >
              <strong>Prisma</strong>
            </Link>
          </p>
        </div>
      ),
    },
  },
  {
    title: "Styles",
    description:
      "Elegant and modern UI Kit components to build your startup, quickly and effortlessly.",
    list: [
      "Built-in TailwindCSS support",
      "Theme Support included",
      "Integrated with ShadCN-UI",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "18 Hours Saved",
      custom_component: (
        <div className="border-t border-solid p-4 border-zinc-200 flex justify-center items-center mt-4">
          <Image
            src="/tailwind-logo.svg"
            alt="stripe_logo"
            height="50"
            width="50"
            decoding="async"
            className="mr-4"
          />

          <p className="text-sm text-zinc-500">
            Powered by{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="transition-all ease-in-out duration-75 hover:text-zinc-800"
            >
              <strong>TailwindCSS</strong>
            </Link>
          </p>
        </div>
      ),
    },
  },
  {
    title: "SEO",
    description: "Rank higher on Google with the right content and SEO.",
    list: [
      "Markdown-based",
      "Social preview cards",
      "Easy pages meta tags",
      "YouTube, Loom, and Tweet embeds",
      "Sitemap generation for quick Google indexing",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "6 Hours Saved",
      custom_component: null,
    },
  },
  {
    title: "AI",
    description: "AI Chat Bot",
    list: [
      "Using the latest AI library",
      "Generative UI with tool",
      "Support all major LLM model",
    ],
    imageUrl: "https://placehold.co/600x400",
    metadata: {
      saved_hour: "20 Hours Saved",
      custom_component: null,
    },
  },
];

export function FeaturesList({ useImage = true }: FeaturesListProps) {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 pb-32 pt-20 text-center lg:pt-32 bg-zinc-50">
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-24">
          <h1 className="text-6xl font-bold text-blue-950">Features</h1>

          <p className="text-lg text-center max-w-3xl w-full items-center text-zinc-500">
            By using ShipNow Template, you will get everything below and much
            more!
          </p>
        </div>

        <div
          className={cn(
            "flex flex-col items-center justify-center relative gap-12 mt-12 p-4 lg:p-0",
            !useImage && "columns-1 lg:columns-2 block"
          )}
        >
          {featureList.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 relative border border-solid rounded-2xl bg-white border-zinc-200",
                !useImage &&
                  "block mb-11 break-inside-avoid rounded-[18px] bg-white"
              )}
            >
              <div className="col-span-1 flex flex-col gap-4 items-start p-8">
                <h1 className="font-semibold text-3xl lg:text-4xl text-zinc-950">
                  {feature.title}
                </h1>

                <p className="text-left font-base text-base lg:text-lg text-zinc-500 max-w-md">
                  {feature.description}
                </p>

                {feature.list && (
                  <div className="flex flex-col items-start text-left relative gap-2">
                    {feature.list.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center font-base text-zinc-400 text-sm"
                      >
                        <Check className="text-green-500 mr-2" size={18} />

                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {feature.metadata && feature.metadata["saved_hour"] && (
                  <div className="rounded-md py-1 px-2 text-xs font-bold text-white bg-green-600">
                    {feature.metadata["saved_hour"]}
                  </div>
                )}
              </div>

              {useImage && (
                <div className="col-span-1">
                  <Image
                    src={feature.imageUrl}
                    alt={`feature__img_${idx}`}
                    height="400"
                    width="600"
                    decoding="async"
                    className="mb-[-12%] rounded-xl ring-1 ring-gray-900/10 transition-opacity duration-100 hover:opacity-50 cursor-pointer"
                  />
                </div>
              )}

              <>
                {feature.metadata &&
                  feature.metadata["custom_component"] &&
                  feature.metadata["custom_component"]}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

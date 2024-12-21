import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento";
import { AnimatedListDemo } from "@/components/landing-page/common/payment-demo-list";
import { AuthDemo } from "@/components/landing-page/common/auth-demo";
import { WaitlistDemo } from "@/components/landing-page/common/waitlist-demo";

const features = [
  {
    name: "Authentication",
    description: "User authentication finally made easy.",
    href: "/",
    cta: "Learn more",
    background: <AuthDemo />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Payment",
    description:
      "Start collecting payments (subscriptions and one-time purchases) in minutes.",
    href: "/",
    cta: "Learn more",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Email",
    description:
      "Create your product newsletter and send transactional emails.",
    href: "/",
    cta: "Learn more",
    background: <WaitlistDemo />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Database",
    description:
      "Use your favorite database. And with Prisma, you don't need to know SQL.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/prisma-logo.svg"
        alt="prisma__img"
        width={100}
        height={100}
        className="absolute top-16 right-28"
      />
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "SEO",
    description: "Rank higher on Google with the right content and SEO.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Landing Page",
    description:
      "Composable and customizable pages, with all you need to showcase and sell your product.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/landing-page.png"
        alt="prisma__img"
        unoptimized={true}
        width={100}
        height={100}
        decoding="async"
        className="w-full -z-50 absolute"
      />
    ),
    className: "col-span-3 lg:col-span-2",
  },
];

export async function FeaturesGrid() {
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

        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

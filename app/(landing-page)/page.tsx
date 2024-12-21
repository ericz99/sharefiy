import React from "react";

import { Navbar } from "@/components/landing-page/navbar";
import { Announcement } from "@/components/landing-page/announcement";
import { HeroWithVideo } from "@/components/landing-page/hero-with-video";
import { Problem } from "@/components/landing-page/problem";
import { FeaturesList } from "@/components/landing-page/features-list";
import { FAQ } from "@/components/landing-page/faq";
import { Waitlist } from "@/components/landing-page/waitlist";
import { CTA } from "@/components/landing-page/cta";
import { Footer } from "@/components/landing-page/footer";
import { Pricing } from "@/components/landing-page/pricing";
import { TwoColumnHero } from "@/components/landing-page/two-column-hero";
import { ClientTweetCard } from "@/components/ui/client-tweet-card";
import { ReviewsColumns } from "@/components/landing-page/reviews-columns";
import { AutoPurchase } from "@/components/landing-page/auto-purchase";
import { FeaturesGrid } from "@/components/landing-page/features-grid";
import { Gift } from "lucide-react";

export default async function LandingPage() {
  return (
    <div className="flex flex-col relative h-full max-h-full w-full mx-auto">
      <AutoPurchase />
      <Navbar />
      <TwoColumnHero />
      <FeaturesGrid />
      {/* <FeaturesList useImage={false} /> */}
      <div className="max-w-5xl mx-auto my-12" id="pricing">
        <div className="pb-14 pt-6 max-w-2xl m-auto px-4 w-full flex flex-col gap-8 justify-center items-center">
          <p className="text-4xl text-center font-bold">
            Save weeks, and thousands of dollars in development costs for $129
            dollars.
          </p>

          <div className="text-sm text-black flex text-center">
            <p className="mr-2 flex gap-1">
              <Gift size={20} color="#85f44d" />
              <strong className="text-[#85f44d]">$100 off</strong>
            </p>
            for the first 1000 customer (500 left)
          </div>
        </div>
      </div>
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

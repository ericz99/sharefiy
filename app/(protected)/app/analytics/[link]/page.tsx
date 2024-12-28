import React from "react";

import { MousePointerClick, Radar } from "lucide-react";
import AnalyticsCard from "@/components/analytic/analytic-card";
import { getLinkAnalytics } from "@/prisma/db/analytics";

export default async function AnalyticPage({
  params,
}: {
  params: {
    link: string;
  };
}) {
  const { link } = await params;

  const analytic = await getLinkAnalytics(link);

  console.log("analytic", analytic);

  return (
    <div className="p-4 max-w-screen-xl container mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Analytic</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <AnalyticsCard
          title="Clicks"
          value={analytic.clicks}
          icon={<MousePointerClick className="h-6 w-6 text-muted-foreground" />}
          percentageChange={5.67}
          trendText="from last week"
        />
        <AnalyticsCard
          title="Unique Clicks"
          value={analytic.uniqueClicks}
          icon={<Radar className="h-6 w-6 text-muted-foreground" />}
          percentageChange={-2.34}
          trendText="from last week"
        />
      </div>
    </div>
  );
}

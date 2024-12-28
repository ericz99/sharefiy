import React from "react";

import { MousePointerClick, Radar } from "lucide-react";
import { getLinkAnalytics } from "@/prisma/db/analytics";
import AnalyticsCard from "@/components/analytic/analytic-card";
import AnalyticChart from "@/components/analytic/analytic-chart";
import AnalyticMap from "@/components/analytic/analytic-map";

export default async function AnalyticPage({
  params,
}: {
  params: {
    link: string;
  };
}) {
  const { link } = await params;

  const { os, browsers, deviceTypes, referrers, geoAnalytics, ...analytic } =
    await getLinkAnalytics(link);

  const mainAnalytics = { os, browsers, deviceTypes, referrers };

  console.log("geoAnalytics", geoAnalytics);

  return (
    <div className="p-4 max-w-screen-xl container mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Analytic</h1>
      <div className="grid gap-4 lg:grid-cols-2 mb-12">
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

      <div className="grid gap-4 lg:grid-cols-2 mb-12">
        <AnalyticChart
          currentSelectedAnalytic="referrers"
          analytics={mainAnalytics}
        />
        <AnalyticChart
          currentSelectedAnalytic="browsers"
          analytics={mainAnalytics}
        />
      </div>

      <div className="relative mb-12">
        <AnalyticMap geoAnalytics={geoAnalytics} />
      </div>
    </div>
  );
}

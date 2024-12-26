import React from "react";

import { Users, DollarSign, ShoppingCart, Clock } from "lucide-react";
import AnalyticsCard from "@/components/analytic/analytic-card";
import { getLinkAnalytics } from "@/prisma/db/analytics";

export default async function AnalyticPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;

  const datas = await getLinkAnalytics(id);

  console.log("datas", datas);

  return (
    <div className="p-4 max-w-7xl container mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AnalyticsCard
          title="Visitors"
          value={10567}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          percentageChange={5.67}
        />
        <AnalyticsCard
          title="Revenue"
          value={54232}
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          percentageChange={-2.34}
          format={(val) => `$${val.toLocaleString()}`}
        />
        <AnalyticsCard
          title="Orders"
          value={1234}
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
          percentageChange={12.5}
        />
        <AnalyticsCard
          title="Avg. Session Duration"
          value={245}
          icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          percentageChange={3.2}
          format={(val) => `${val} sec`}
          trend="increase"
          trendText="vs last week"
        />
      </div>
    </div>
  );
}

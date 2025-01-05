import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  format?: (value: number) => string;
}

export default function AnalyticsCard({
  title,
  value,
  icon,
  format = (val) => val.toLocaleString(),
}: AnalyticsCardProps) {
  return (
    <Card className="w-full shadow-none border-zinc-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-none">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-3xl font-extrabold tracking-tight">
          {format(value)}
        </div>
      </CardContent>
    </Card>
  );
}

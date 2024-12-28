import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  percentageChange: number;
  format?: (value: number) => string;
  trend?: "increase" | "decrease";
  trendText?: string;
}

export default function AnalyticsCard({
  title,
  value,
  icon,
  percentageChange,
  format = (val) => val.toLocaleString(),
  trend = percentageChange >= 0 ? "increase" : "decrease",
  trendText = "from last period",
}: AnalyticsCardProps) {
  const isPositiveChange = trend === "increase";

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
        <div className="flex items-center pt-2 text-sm">
          <div
            className={`flex items-center ${
              isPositiveChange ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositiveChange ? (
              <TrendingUp className="mr-1 h-4 w-4" />
            ) : (
              <TrendingDown className="mr-1 h-4 w-4" />
            )}
            <span className="font-medium">
              {isPositiveChange ? "+" : ""}
              {Math.abs(percentageChange).toFixed(2)}%
            </span>
          </div>
          <span className="text-muted-foreground ml-2">{trendText}</span>
        </div>
      </CardContent>
    </Card>
  );
}

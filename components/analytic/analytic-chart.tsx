"use client";

import { useMemo, useState } from "react";

import { ChevronDown, Expand } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  getBrowserIcon,
  getFaviconImage,
  getOsIcon,
  shortenUrl,
  shortenUrlLabel,
} from "@/lib/utils";

interface AnalyticItem {
  label: string;
  count: number;
}

interface AnalyticChartProps {
  currentSelectedAnalytic: string;
  analytics: {
    os: AnalyticItem[];
    browsers: AnalyticItem[];
    deviceTypes: AnalyticItem[];
    referrers: AnalyticItem[];
  };
}

const analyticKeys = ["os", "browsers", "deviceTypes", "referrers"] as const;
type AnalyticKey = (typeof analyticKeys)[number];

export default function AnalyticChart({
  currentSelectedAnalytic,
  analytics,
}: AnalyticChartProps) {
  const [activeAnalytics, setActiveAnalytics] = useState<AnalyticKey>(
    currentSelectedAnalytic as AnalyticKey
  );

  const allAnalyticKeys = useMemo(() => {
    return Object.keys(analytics) as AnalyticKey[];
  }, [analytics]);

  const sortedAnalytics = useMemo(() => {
    return [...analytics[activeAnalytics]].sort((a, b) => b.count - a.count);
  }, [analytics, activeAnalytics]);

  const maxValue = Math.max(...analytics[activeAnalytics].map((a) => a.count));

  return (
    <div className="flex flex-col relative border border-solid border-gray-200 rounded-lg">
      <div className="flex gap-2 p-2 border-b border-solid border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="border-none gap-2 hover:border-none active:border-none focus:border-none"
            >
              <span className="text-gray-500 capitalize font-bold">
                {activeAnalytics}
              </span>
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {allAnalyticKeys.map((key) => (
              <DropdownMenuItem
                key={key}
                onClick={() => setActiveAnalytics(key)}
                className="capitalize"
              >
                {key}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col my-4 h-96 gap-1">
        <div className="flex flex-col flex-1 relative">
          {sortedAnalytics.map((analytic, idx) => (
            <div key={idx} className="relative h-10">
              <div
                className="absolute top-0 left-0 h-full bg-blue-50"
                style={{ width: `${(analytic.count / maxValue) * 100}%` }}
              ></div>
              <div className="relative h-full w-full flex justify-between items-center px-4">
                <div className="flex items-center">
                  {activeAnalytics === "referrers" && (
                    <img
                      src={getFaviconImage(shortenUrl(analytic.label))}
                      alt="favicon"
                      className="h-4 w-4 mr-2"
                    />
                  )}
                  {activeAnalytics === "browsers" && (
                    <img
                      src={getBrowserIcon(analytic.label)}
                      alt="browser icon"
                      className="h-4 w-4 mr-2"
                    />
                  )}
                  {activeAnalytics === "os" && (
                    <img
                      src={getOsIcon(analytic.label)}
                      alt="os icon"
                      className="h-4 w-4 mr-2"
                    />
                  )}
                  <p className="capitalize text-sm font-semibold">
                    {activeAnalytics == "referrers"
                      ? shortenUrlLabel(analytic.label)
                      : analytic.label}
                  </p>
                </div>
                <span className="ml-auto font-bold">{analytic.count}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Expand size="16" />

            <p className="text-center text-gray-500 text-sm">View Details</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

// https://www.reddit.com/r/chrome/comments/5dxu7h/how_do_i_get_the_url_for_the_websites_icon/

import { NextRequest, userAgent } from "next/server";
import { headers } from "next/headers";
import DeviceDetector from "device-detector-js";
import geoip from "geoip-lite";

import { getLinkBySlug } from "@/prisma/db/links";
import { upsertLinkAnalyticData } from "@/prisma/db/analytics";

async function getGeoLocation(ip: string) {
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  return await res.json();
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const link = searchParams.get("link");

  if (!link) {
    return Response.json({ error: "Link is required" }, { status: 400 });
  }

  const linkData = await getLinkBySlug(link);

  if (!linkData) {
    return Response.json({ error: "Link is required" }, { status: 400 });
  }

  const referrer = req.headers.get("referer") || "Direct";
  const { device, os, browser } = userAgent(req);

  // Get IP address and geolocation
  const realIp = (await headers()).get("x-real-ip");
  const forwardedFor = (await headers()).get("x-forwarded-for");

  const geo = await getGeoLocation(realIp || forwardedFor || "");

  // # save analytic data
  await upsertLinkAnalyticData({
    ipAddress: realIp!,
    geo,
    device: {
      device: {
        type: device.type || "Unknown",
      },
      os: {
        name: os.name || "Unknown",
      },
      client: {
        name: browser.name || "Unknown",
      },
    },
    link,
    referrer,
  });

  // # redirect to original URL
  return Response.json({ originalUrl: linkData.originalUrl });
}

import { prisma } from "@/prisma/prisma";
import { Prisma } from "@prisma/client";

export type DeviceInfo = {
  device: {
    type: string;
  };
  os: {
    name: string;
  };
  client: {
    name: string;
  };
};

export type GeoInfo = {
  country: string;
  region: string;
  city: string;
  [key: string]: any;
};

export type TrackingInfo = {
  link: string;
  referrer: string;
  device: DeviceInfo;
  geo: GeoInfo | null;
  ipAddress: string;
};

const getCurrentAnalytics = async (link?: string) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  return await prisma.linkAnalytic.findFirst({
    where: {
      link: {
        slug: link,
      },
      date: currentDate,
    },
  });
};

export const upsertLinkAnalyticData = async ({
  ipAddress,
  geo,
  device,
  link,
  referrer,
}: TrackingInfo) => {
  const currentAnalytics = await getCurrentAnalytics(link);

  const isNewIp =
    currentAnalytics &&
    currentAnalytics.metadata &&
    // @ts-ignore
    !analytics.metadata.uniqueIps.includes(ipAddress);

  if (currentAnalytics) {
    await prisma.linkAnalytic.update({
      where: {
        id: currentAnalytics.id,
      },
      data: {
        clicks: {
          increment: 1,
        },
        uniqueClicks: isNewIp ? { increment: 1 } : undefined,
        metadata: isNewIp
          ? {
              uniqueIps: {
                push: ipAddress,
              },
            }
          : undefined,
        trackInfos: {
          create: [
            {
              ipAddress,
              geo: geo || {},
              deviceType: device.device.type || "Unknown",
              os: device.os.name || "Unknown",
              browser: device.client.name || "Unknown",
              referrer,
            },
          ],
        },
      },
    });
  } else {
    const _link = await prisma.link.findFirst({
      where: {
        slug: link,
      },
    });

    if (!_link) {
      throw new Error("Link not found");
    }

    await prisma.linkAnalytic.create({
      data: {
        date: new Date().toISOString().slice(0, 10),
        link: {
          connect: {
            id: _link.id,
          },
        },
        clicks: 1,
        uniqueClicks: 1,
        trackInfos: {
          create: [
            {
              ipAddress,
              geo: geo || {},
              deviceType: device.device.type || "Unknown",
              os: device.os.name || "Unknown",
              browser: device.client.name || "Unknown",
              referrer,
            },
          ],
        },
        metadata: {
          uniqueIps: [ipAddress],
        },
      },
    });
  }
};

export const logTrackingInfo = async (info: TrackingInfo) => {
  const { link, referrer, device, geo, ipAddress } = info;

  const currentAnalytics = await getCurrentAnalytics(link);

  if (!currentAnalytics) {
    throw new Error("Link analytics not found");
  }

  await prisma.trackInfo.create({
    data: {
      referrer,
      deviceType: device.device.type || "Unknown",
      os: device.os.name || "Unknown",
      browser: device.client.name || "Unknown",
      geo: geo || {},
      ipAddress,
      linkAnalytic: {
        connect: {
          id: currentAnalytics.id,
        },
      },
    },
  });
};

export async function getLinkAnalytics(link: string) {
  const analytics = await prisma.linkAnalytic.groupBy({
    by: ["date"],
    where: {
      link: {
        slug: link,
      },
    },
    _sum: {
      uniqueClicks: true,
      clicks: true,
    },
    _count: {
      _all: true,
    },
  });

  const osTypes = await prisma.trackInfo.groupBy({
    by: ["os"],
    where: {
      linkAnalytic: {
        link: {
          slug: link,
        },
      },
    },
    _count: {
      _all: true,
    },
  });

  const browserTypes = await prisma.trackInfo.groupBy({
    by: ["browser"],
    where: {
      linkAnalytic: {
        link: {
          slug: link,
        },
      },
    },
    _count: {
      _all: true,
    },
  });

  const deviceTypes = await prisma.trackInfo.groupBy({
    by: ["deviceType"],
    where: {
      linkAnalytic: {
        link: {
          slug: link,
        },
      },
    },
    _count: {
      _all: true,
    },
  });

  const referrers = await prisma.trackInfo.groupBy({
    by: ["referrer"],
    where: {
      linkAnalytic: {
        link: {
          slug: link,
        },
      },
    },
    _count: {
      _all: true,
    },
  });

  const geoData = await prisma.trackInfo.groupBy({
    by: ["geo"],
    where: {
      linkAnalytic: {
        link: {
          slug: link,
        },
      },
    },
    _count: {
      _all: true,
    },
  });

  const analyticObject = {
    uniqueClicks: 0,
    clicks: 0,
    os: [] as { label: string; count: number }[],
    browsers: [] as { label: string; count: number }[],
    deviceTypes: [] as { label: string; count: number }[],
    referrers: [] as { label: string; count: number }[],
    geoAnalytics: {
      countries: {} as Record<string, number>,
      regions: {} as Record<string, number>,
      cities: {} as Record<string, number>,
    },
  };

  analytics.forEach((analytic) => {
    analyticObject.uniqueClicks += analytic._sum.uniqueClicks ?? 0;
    analyticObject.clicks += analytic._sum.clicks ?? 0;
  });

  deviceTypes.forEach((device) =>
    analyticObject.deviceTypes.push({
      label: device.deviceType,
      count: device._count._all,
    })
  );

  osTypes.forEach((os) => {
    analyticObject.os.push({
      label: os.os,
      count: os._count._all,
    });
  });

  browserTypes.forEach((browser) => {
    analyticObject.browsers.push({
      label: browser.browser,
      count: browser._count._all,
    });
  });

  referrers.forEach((referrer) =>
    analyticObject.referrers.push({
      label: referrer.referrer,
      count: referrer._count._all,
    })
  );

  geoData.forEach((item) => {
    const geo = item.geo as any;

    if (geo.country) {
      analyticObject.geoAnalytics.countries[geo.country] =
        (analyticObject.geoAnalytics.countries[geo.country] || 0) +
        item._count._all;
    }
    if (geo.region) {
      analyticObject.geoAnalytics.regions[geo.region] =
        (analyticObject.geoAnalytics.regions[geo.region] || 0) +
        item._count._all;
    }
    if (geo.city) {
      analyticObject.geoAnalytics.cities[geo.city] =
        (analyticObject.geoAnalytics.cities[geo.city] || 0) + item._count._all;
    }
  });

  return analyticObject;
}

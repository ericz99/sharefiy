import { prisma } from "@/prisma/prisma";

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

export async function getLinkAnalytics(id: string) {
  const analytics = await prisma.linkAnalytic.groupBy({
    by: ["date"],
    where: {
      link: {
        id,
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

  const trackInfos = await prisma.trackInfo.groupBy({
    by: ["createdAt"],
    where: {
      linkAnalytic: {
        link: {
          id,
        },
      },
    },
    _count: {
      _all: true,
    },
  });

  return analytics.map((analytic) => ({
    date: analytic.date,
    uniqueClicks: analytic._sum.uniqueClicks,
    clicks: analytic._sum.clicks,
    totalEntries: analytic._count._all,
    trackInfos: trackInfos
      .filter(
        (info) =>
          info.createdAt.toISOString().slice(0, 10) ===
          analytic.date.toISOString().slice(0, 10)
      )
      .map((info) => ({
        date: info.createdAt,
        count: info._count._all,
      })),
  }));
}

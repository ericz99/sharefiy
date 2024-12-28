import { prisma } from "@/prisma/prisma";
import { SEED_PLANS } from "@/config/stripe";

import { getLinkAnalytics } from "@/prisma/db/analytics";

async function main() {
  // for (const plan of SEED_PLANS) {
  //   const { price, ...rest } = plan;

  //   const product = await prisma.product.create({
  //     data: {
  //       ...rest,
  //     },
  //   });

  //   await prisma.price.create({
  //     data: {
  //       ...price,
  //       trialPeriodDay: 0,
  //       product: {
  //         connect: {
  //           id: product.id,
  //         },
  //       },
  //     },
  //   });
  // }

  // const linkAnalytic = await prisma.linkAnalytic.create({
  //   data: {
  //     date: new Date().toISOString().slice(0, 10),
  //     clicks: 3,
  //     uniqueClicks: 3,
  //     link: {
  //       connect: {
  //         id: "cm55gizjr0003ud8sgv4uyroi",
  //       },
  //     },
  //   },
  // });

  // await prisma.trackInfo.createMany({
  //   data: [
  //     {
  //       referrer: "https://google.com",
  //       ipAddress: "192.168.0.1",
  //       deviceType: "Desktop",
  //       os: "Windows 10",
  //       browser: "Chrome 114",
  //       geo: {
  //         country: "United States",
  //         city: "Staten Island",
  //         region: "New York",
  //         coordinates: { lat: 67.7739, lon: -122.4194 },
  //       },
  //       linkAnalyticId: "cm56wov8l0000udfonwwqmvti",
  //     },
  //     {
  //       referrer: "https://facebook.com",
  //       ipAddress: "203.0.113.0",
  //       deviceType: "Mobile",
  //       os: "iOS 16",
  //       browser: "Safari",
  //       geo: {
  //         country: "Canada",
  //         city: "Toronto",
  //         region: "Ontario",
  //         coordinates: { lat: 43.65107, lon: -79.347015 },
  //       },
  //       linkAnalyticId: "cm56wov8l0000udfonwwqmvti",
  //     },
  //     {
  //       referrer: "https://twitter.com",
  //       ipAddress: "198.51.100.42",
  //       deviceType: "Tablet",
  //       os: "Android 13",
  //       browser: "Firefox",
  //       geo: {
  //         country: "India",
  //         city: "Mumbai",
  //         region: "Maharashtra",
  //         coordinates: { lat: 19.076, lon: 72.8777 },
  //       },
  //       linkAnalyticId: "cm56wov8l0000udfonwwqmvti",
  //     },
  //   ],
  // });

  const data = await getLinkAnalytics("cm55gizjr0003ud8sgv4uyroi");
  console.dir(data);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

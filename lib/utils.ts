import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getURL = (path: string = "") => {
  // Check if NEXT_PUBLIC_SITE_URL is set and non-empty. Set this to your site URL in production env.
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_SITE_URL
      : // If not set, check for NEXT_PUBLIC_VERCEL_URL, which is automatically set by Vercel.
      process?.env?.NEXT_PUBLIC_VERCEL_URL &&
        process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : // If neither is set, default to localhost for local development.
        "http://localhost:3000/";

  // Trim the URL and remove trailing slash if exists.
  url = url.replace(/\/+$/, "");
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Ensure path starts without a slash to avoid double slashes in the final URL.
  path = path.replace(/^\/+/, "");

  // Concatenate the URL and the path.
  return path ? `${url}/${path}` : url;
};

export const calculateTrialEndUnixTimestamp = (
  trialPeriodDays: number | null | undefined
) => {
  // Check if trialPeriodDays is null, undefined, or less than 2 days
  if (
    trialPeriodDays === null ||
    trialPeriodDays === undefined ||
    trialPeriodDays < 2
  ) {
    return undefined;
  }

  const currentDate = new Date(); // Current date and time
  const trialEnd = new Date(
    currentDate.getTime() + (trialPeriodDays + 1) * 24 * 60 * 60 * 1000
  ); // Add trial days
  return Math.floor(trialEnd.getTime() / 1000); // Convert to Unix timestamp in seconds
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const toDateTime = (secs: number) => {
  var t = new Date(+0); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const formatDate = (date: Date) => {
  // Get the parts of the date (month, day, year)
  var month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index (0 for January)
  var day = date.getDate();
  var year = date.getFullYear();

  // Pad single digit month or day with leading zero
  var paddedMonth = month < 10 ? "0" + month : month;
  var paddedDay = day < 10 ? "0" + day : day;

  // Format the date as mm/dd/yyyy
  var formattedDate = paddedMonth + "/" + paddedDay + "/" + year;

  return formattedDate;
};

export const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const getSocialImages = (name: string) => {
  switch (name) {
    case "google":
      return "/google-logo.png";
    case "github":
      return "/github-logo.svg";
    default:
      return null;
  }
};

export const getFaviconImage = (url: string) => {
  return `https://www.google.com/s2/favicons?domain=${url}`;
};

export const shortenUrl = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
};

export const shortenUrlLabel = (url: string) => {
  const domain = url.replace(/(^\w+:|^)\/\//, "").split("/")[0];
  return domain.split(".").slice(-2, -1)[0]; // Get the second to last part of the domain
};

const stripVersion = (name: string) => {
  return name.split(" ")[0].toLowerCase();
};

export const getBrowserIcon = (browser: string) => {
  const domainMap: { [key: string]: string } = {
    chrome: "google.com",
    firefox: "mozilla.org",
    safari: "apple.com",
    edge: "microsoft.com",
    opera: "opera.com",
  };

  const strippedBrowser = stripVersion(browser);
  const domain = domainMap[strippedBrowser] || "";
  return domain ? getFaviconImage(domain) : "/question-mark.jpg";
};

export const getOsIcon = (os: string) => {
  const domainMap: { [key: string]: string } = {
    windows: "microsoft.com",
    macos: "apple.com",
    linux: "kernel.org",
    android: "android.com",
    ios: "apple.com",
  };

  const strippedOs = stripVersion(os);
  const domain = domainMap[strippedOs] || "";
  return domain ? getFaviconImage(domain) : "/question-mark.jpg";
};

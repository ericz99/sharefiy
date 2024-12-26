import { notFound, redirect } from "next/navigation";

export default async function TrackerLinkPage({
  params,
}: {
  params: {
    link: string;
  };
}) {
  const { link } = await params;

  console.log("link", link);

  const res = await fetch(`http://localhost:3000/api/track?link=${link}`);
  const data = await res.json();

  console.log("data", data);

  if (data.error) {
    return notFound();
  }

  // redirect(data.originalUrl);

  return <>{link}</>;
}

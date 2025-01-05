import React from "react";

import LinkController from "@/components/links/link-controller";
import LinkListLayout from "@/components/links/link-list-layout";

import { getAllUserLinks } from "@/prisma/db/links";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { createOrUpdateTrackerLink, checkSlugAvailability } from "./action";

export default async function LinksPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const userId = session.user?.id;

  if (!userId) {
    throw new Error("User ID is undefined");
  }

  const links = await getAllUserLinks(userId);

  console.log("links", links);

  return (
    <div className="h-full flex flex-col overflow-hidden p-2">
      <LinkController
        checkSlugAvailability={checkSlugAvailability}
        createOrUpdateLink={createOrUpdateTrackerLink}
      />
      <LinkListLayout
        checkSlugAvailability={checkSlugAvailability}
        createOrUpdateLink={createOrUpdateTrackerLink}
        links={links}
      />
    </div>
  );
}

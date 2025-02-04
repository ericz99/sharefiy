"use server";

import { auth } from "@/auth";
import { createLink, updateLink, getLinkBySlug } from "@/prisma/db/links";
import { revalidatePath } from "next/cache";

export const createOrUpdateTrackerLink = async (data: {
  originalUrl: string;
  slug: string;
  isActive?: boolean;
  isEditMode?: boolean;
  id?: string;
}) => {
  const session = await auth();

  if (!session || !session.user?.id) {
    throw new Error("Invalid session");
  }

  const { isEditMode, id, ...rest } = data;

  const isSlugAvailable = await checkSlugAvailability(data.slug);

  if (isSlugAvailable) {
    return {
      error: "Slug is already taken",
    };
  }

  if (!isEditMode && !id) {
    await createLink({
      ...rest,
      userId: session.user.id,
    });
  } else {
    await updateLink({
      ...rest,
      id: id!,
      userId: session.user.id,
    });
  }

  revalidatePath("/app/links");
};

export const checkSlugAvailability = async (slug: string) => {
  const link = await getLinkBySlug(slug);
  if (link) return true;
  return false;
};

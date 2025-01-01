import { prisma } from "@/prisma/prisma";

export const createLink = async ({
  userId,
  ...rest
}: {
  userId: string;
  originalUrl: string;
  slug: string;
}) => {
  return await prisma.link.create({
    data: {
      ...rest,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

export const getAllUserLinks = async (userId: string) => {
  return await prisma.link.findMany({
    where: {
      userId,
    },
    include: {
      analytics: true,
    },
  });
};

export const updateLink = async ({
  id,
  userId,
  ...rest
}: {
  id: string;
  userId: string;
  originalUrl?: string;
  slug?: string;
  isActive?: boolean;
}) => {
  return await prisma.link.update({
    where: {
      id,
      userId,
    },
    data: {
      ...rest,
    },
  });
};

export const deleteLink = async ({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) => {
  return await prisma.link.delete({
    where: {
      id,
      userId,
    },
  });
};

export const getLinkBySlug = async (slug: string) => {
  return await prisma.link.findUnique({
    where: {
      slug,
    },
  });
};

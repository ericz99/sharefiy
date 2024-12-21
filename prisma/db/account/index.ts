import { prisma } from "@/prisma/prisma";

export const getUserSocialAccounts = async (id: string) => {
  try {
    const accounts = await prisma.account.findMany({
      where: {
        userId: id,
      },
    });

    return accounts;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const unlinkSocialAccount = async ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  try {
    await prisma.account.delete({
      where: {
        id: accountId,
        userId,
      },
    });
  } catch (error) {
    console.error(error);
  }

  return null;
};

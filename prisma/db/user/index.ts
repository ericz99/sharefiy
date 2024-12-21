import { type User } from "next-auth";
import { prisma } from "@/prisma/prisma";
import { stripe } from "@/lib/stripe/config";
import { PRICES } from "@/config/stripe";
import { manageSubscriptionStatusChange } from "../subscription";

export const getUserData = async (user: User) => {
  try {
    const userData = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
      include: {
        sub: true,
      },
    });

    return userData;
  } catch (error) {
    console.error("error occured", error);
  }

  return null;
};

export const getUser = async (data: { id?: string; email?: string }) => {
  const { id, email } = data;

  try {
    const userData = await prisma.user.findFirst({
      where: {
        id,
        email,
      },
      include: {
        sub: true,
        paymentHistory: true,
      },
    });

    return userData;
  } catch (error) {
    console.error("error occured", error);
  }

  return null;
};

export type UserData = Awaited<ReturnType<typeof getUserData>>;

export const checkIfHasUser = async ({ email }: { email: string }) => {
  try {
    const hasUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!hasUser) return false;
    return true;
  } catch (error) {
    console.error("error occured", error);
  }

  return false;
};

export const attachPlanToUser = async ({ id, email }: User) => {
  try {
    if (!email) {
      throw new Error(
        "[attachPlanToUser]: Failed to attach plan, user does not have an email!"
      );
    }

    // # create new stripe customer because it will always be brand new
    const stripeCustomer = await stripe.customers.create({
      email,
    });

    if (!stripeCustomer) {
      throw new Error("Failed to create stripe customer.");
    }

    // # create new user
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        stripeUserId: stripeCustomer.id,
        credit: 25, // default all new user will get 25 credit because they're on the free plan
      },
    });

    // # create new subscription for user = free plan $0 / month
    // # after this is created, it will then be triggered by the webhook where we will store it in the database
    const sub = await stripe.subscriptions.create({
      customer: stripeCustomer.id,
      items: [
        {
          price: PRICES["free_plan"],
        },
      ],
    });

    // # update / create subscription for user
    await manageSubscriptionStatusChange(sub.id, sub.customer as string);

    return user;
  } catch (error) {
    console.error("error occured", error);
  }

  return null;
};

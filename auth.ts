import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma/prisma";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

import { attachPlanToUser } from "@/prisma/db/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub, Resend],
  pages: {
    signIn: "/auth/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, trigger, user }) => {
      if (trigger === "signUp") {
        // # attach plan to user
        await attachPlanToUser(user);
      }

      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session({ session, token }) {
      // @ts-ignore
      session.user.id = token.id;
      return session;
    },
  },
});

export type SignIn = typeof signIn;
export type SignOut = typeof signOut;

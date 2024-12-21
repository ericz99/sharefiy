import React from "react";

import { redirect } from "next/navigation";
import { UserCog } from "lucide-react";
import PersonalInfo from "@/components/profile/personal-info";
import SocialLinkedAccount from "@/components/profile/social-linked-account";
import { auth } from "@/auth";

import { getUserSocialAccounts } from "@/prisma/db/account";

export default async function ProfilePage() {
  const authSession = await auth();

  if (!authSession) {
    redirect("/auth/login");
  }

  const linkedAccounts = await getUserSocialAccounts(authSession.user?.id!);

  return (
    <div className="container relative mx-auto max-w-screen-2xl pt-12 px-4 md:px-8">
      <div className="flex flex-col gap-4 relative mb-4">
        <div className="flex items-center gap-2">
          <div className="border border-solid rounded-lg border-zinc-200 bg-zinc-200 p-1">
            <UserCog size="20" />
          </div>

          <h1 className="text-2xl font-normal text-zinc-600">Profile</h1>
        </div>

        <p className="text-base font-normal text-zinc-600">
          Update your profile securely
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        <PersonalInfo user={authSession.user!} />
        <SocialLinkedAccount linkedAccounts={linkedAccounts ?? []} />
      </div>
    </div>
  );
}

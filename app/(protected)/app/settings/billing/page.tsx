import React from "react";
import { getUserSubscription } from "@/prisma/db/subscription";
import { auth } from "@/auth";

import { CustomerPortalForm } from "@/components/billing/customer-portal-form";
import { getProducts } from "@/prisma/db/product";
import { PricingPlan } from "@/components/billing/pricing-plan";
import { Separator } from "@/components/ui/separator";
import { updateSubscription } from "./action";
import { redirect } from "next/navigation";
import { Wallet } from "lucide-react";

export default async function BillingPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  const { user } = session;
  const sub = await getUserSubscription(user.id!);
  const products = await getProducts();

  // # get only type of recurring
  const recurringPlans = products
    ?.filter((p) => p.price?.type == "recurring")
    .reverse();

  return (
    <div className="container relative mx-auto max-w-screen-2xl pt-12 px-4 md:px-8">
      <div className="flex flex-col gap-4 relative mb-4">
        <div className="flex items-center gap-2">
          <div className="border border-solid rounded-lg border-zinc-200 bg-zinc-200 p-1">
            <Wallet size="20" />
          </div>

          <h1 className="text-2xl font-normal text-zinc-600">Billing</h1>
        </div>

        <p className="text-base font-normal text-zinc-600">
          View and manage your billing information
        </p>
      </div>

      <CustomerPortalForm sub={sub} />

      <Separator className="mb-8" />

      <PricingPlan
        sub={sub}
        products={recurringPlans ?? []}
        updateSubscription={updateSubscription}
      />
    </div>
  );
}

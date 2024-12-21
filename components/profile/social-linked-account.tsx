"use client";

import React, { useCallback } from "react";

import Image from "next/image";

import { Trash2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { formatDate, getSocialImages } from "@/lib/utils";

import { type SocialLinkedAccountProps } from "./types";

export default function SocialLinkedAccount({
  linkedAccounts,
}: SocialLinkedAccountProps) {
  const fetchSocialImage = useCallback(
    (name: string) => {
      return getSocialImages(name);
    },
    [getSocialImages]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-xl">
          Manage Linked Accounts
        </CardTitle>
        <CardDescription className="text-zinc-500 italic">
          View and manage your linked social accounts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {linkedAccounts.length > 0 ? (
          linkedAccounts.map((account) => (
            <div key={account.id} className="flex items-center gap-4 relative">
              <div className="flex gap-4 items-center flex-1">
                <div className="h-16 w-16 rounded-lg border border-solid border-zinc-200 p-4">
                  <Image
                    src={fetchSocialImage(account.provider) as string}
                    alt="social__image"
                    width="50"
                    height="50"
                  />
                </div>

                <p className="font-semibold text-lg capitalize">
                  {account.provider}
                </p>

                <p className="text-zinc-500 text-sm">
                  Connected on {formatDate(account.createdAt)}
                </p>
              </div>

              <Button variant="destructive" size="lg">
                <Trash2 size="18" className="mr-2" />
                Unlink
              </Button>
            </div>
          ))
        ) : (
          <div>not connected</div>
        )}
      </CardContent>
    </Card>
  );
}

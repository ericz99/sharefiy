"use client";

import React from "react";

import MagicLink from "./magic-link";
import GoogleButton from "./provider/google-button";
import GithubButton from "./provider/github-button";
import { TextDivider } from "@/components/common/text-divider";

import { type ProviderProps } from "./types";

export default function AuthLayout({ signIn }: ProviderProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <MagicLink signIn={signIn} />
      <TextDivider text="OR" />

      <div className="flex gap-2">
        <GoogleButton signIn={signIn} />
        <GithubButton signIn={signIn} />
      </div>
    </div>
  );
}

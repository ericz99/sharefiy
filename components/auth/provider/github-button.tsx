"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ProviderProps } from "../types";

export default function GithubButton({ signIn }: ProviderProps) {
  return (
    <form
      className="flex-1"
      action={async () => {
        await signIn("github", {
          redirectTo: "/app/dashboard",
        });
      }}
    >
      <Button variant="outline" size="lg">
        <Image
          src="/github-logo.svg"
          alt="github__logo"
          width="25"
          height="25"
          className="mr-4"
        />
        <span>Sign in with Github</span>
      </Button>
    </form>
  );
}

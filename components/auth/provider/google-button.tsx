"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ProviderProps } from "../types";

export default function GoogleButton({ signIn }: ProviderProps) {
  return (
    <form
      className="flex-1"
      action={async () => {
        await signIn("google", {
          redirectTo: "/app/links",
        });
      }}
    >
      <Button variant="outline" size="lg">
        <Image
          src="/google-logo.png"
          alt="google_png"
          width="25"
          height="25"
          className="mr-4"
        />
        <span>Sign in with Google</span>
      </Button>
    </form>
  );
}

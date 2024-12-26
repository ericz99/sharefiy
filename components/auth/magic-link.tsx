import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { ProviderProps } from "./types";

export default function MagicLink({ signIn }: ProviderProps) {
  const [email, setEmail] = useState("");

  return (
    <form
      action={async () => {
        await signIn("resend", {
          email,
          redirectTo: "/app/links",
        });
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="font-medium text-base">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <Button type="submit" variant="default" className="w-full" size="lg">
        Send Magic Link
      </Button>
    </form>
  );
}

import React from "react";

import AuthLayout from "@/components/auth/auth-layout";
import { signIn } from "@/app/auth/action";

export default function AuthLoginPage() {
  return (
    <div className="flex flex-col relative max-w-md mx-auto justify-center items-center h-full w-full">
      <div className="flex flex-col justify-start w-full gap-2 mb-8">
        <h1 className="text-3xl font-semibold">Login</h1>
        <p className="text-sm">Login your account using Magic Link or OAuth</p>
      </div>

      <AuthLayout signIn={signIn} />
    </div>
  );
}

import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full p-8 lg:px-0 relative rounded-lg border-t border-solid border-zinc-200 my-12">
      <div className="mx-auto max-w-5xl md:flex md:justify-between py-16 sm:pb-16 gap-4">
        <div className="mb-12 flex-col flex gap-4">
          <Link className="flex items-center gap-2" href="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ship.Now
            </span>
          </Link>
          <p className="max-w-xs">
            ShipNow is a All In One SaaS boilerplate to help you run and deploy
            your next SaaS app within a day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>

            <ul className="gap-2 grid">
              <li>
                <Link
                  href="/terms"
                  className="cursor-pointer text-gray-400 hover:text-gray-600 hover:opacity-90 duration-200"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="cursor-pointer text-gray-400 hover:text-gray-600 hover:opacity-90 duration-200"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Others
            </h2>

            <ul className="gap-2 grid">
              <li>
                <Link
                  href="/#"
                  className="cursor-pointer text-gray-400 hover:text-gray-600 hover:opacity-90 duration-200"
                >
                  Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="cursor-pointer text-gray-400 hover:text-gray-600 hover:opacity-90 duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="cursor-pointer text-gray-400 hover:text-gray-600 hover:opacity-90 duration-200"
                >
                  Change Log
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-zinc-400 text-sm mx-auto max-w-5xl">
        Copyright © 2024 <strong>ShipNow</strong>. All rights reserved.
      </p>
    </div>
  );
}

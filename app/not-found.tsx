/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { Home, Book, MessageSquareMore } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Image
        src="/404-error.svg"
        alt="error"
        width={256}
        height={256}
        className="flex relative mb-8 border rounded-lg border-zinc-300 h-64 w-64 p-6 shadow-2xl"
      />

      <h1 className="text-2xl font-semibold text-zinc-700">
        This page doesn't exist 😅
      </h1>

      <div className="flex relative gap-8">
        <Button variant={"default"} asChild>
          <Link
            href="/"
            className="mt-4 rounded-md flex gap-2 items-center bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          >
            <Home size={18} />
            Home
          </Link>
        </Button>

        <Button variant={"default"} asChild>
          <Link
            href="/docs"
            className="mt-4 rounded-md flex gap-2 items-center bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          >
            <Book size={18} />
            Documentation
          </Link>
        </Button>

        <Button variant={"default"} asChild>
          <Link
            href="/#"
            className="mt-4 rounded-md flex gap-2 items-center bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          >
            <MessageSquareMore size={18} />
            Support
          </Link>
        </Button>
      </div>
    </main>
  );
}

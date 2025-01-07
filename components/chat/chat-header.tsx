"use client";

import { Brain } from "lucide-react";
import Link from "next/link";

export function ChatHeader() {
  return (
    <header className="border-b">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between h-16 items-center px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-semibold">Haven Ai</span>
        </Link>
        <p className="text-xl text-muted-foreground">
          Your digital safe place for therapy.
        </p>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FooterNav() {
  return (
    <nav className="sticky bottom-0 left-0 z-50 w-full bg-orange-500 text-white">
      <div className="w-full grid grid-cols-3 grid-rows-1 md:grid-rows-1 items-center text-orange-700 p-2">
        <section
          className="
          col-span-3
          md:row-start-1 md:col-start-2 md:col-span-1
          flex flex-col gap-2
          md:flex-row md:justify-center md:items-center md:space-x-2 md:gap-0
        "
        >
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="">Guidelines</Link>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/faq">FAQ</Link>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/lists">Lists</Link>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/api">API</Link>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/security">Security</Link>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/legal">Legal</Link>
          </Button>
          <Button
            asChild
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/apply">Apply to YC</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full md:w-auto justify-start md:justify-center"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </section>
      </div>
    </nav>
  );
}

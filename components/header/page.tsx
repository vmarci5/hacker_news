"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-orange-500 text-white">
      <div className="w-full grid grid-cols-3 items-center space-x-4 text-orange-700">
        <section className="justify-start ml-2">
          <Link
            href="/"
            rel="Dashboard"
            title="Dashboard"
            className="inline-block"
          >
            <Image
              src="/images/logo.png"
              alt="Hacker News Logo"
              width={50}
              height={50}
            />
          </Link>
        </section>
        <section className="hidden md:flex space-x-2 justify-center">
          <Link href="/newest" rel="New" title="New">
            <Button className="transition-transform duration-150 hover:scale-110">
              New
            </Button>
          </Link>
          <Button className="transition-transform duration-150 hover:scale-110">
            Past
          </Button>
          <Button className="transition-transform duration-150 hover:scale-110">
            Comments
          </Button>
          <Link href="/ask" rel="Ask" title="Ask">
            <Button className="transition-transform duration-150 hover:scale-110">
              Ask
            </Button>
          </Link>
          <Link href="/show" rel="Show" title="Show">
            <Button className="transition-transform duration-150 hover:scale-110">
              Show
            </Button>
          </Link>
          <Link href="/jobs" rel="Jobs" title="Jobs">
            <Button className="transition-transform duration-150 hover:scale-110">
              Jobs
            </Button>
          </Link>
          <Button className="transition-transform duration-150 hover:scale-110">
            Submit
          </Button>
        </section>
        <section className="hidden md:flex justify-end ml-auto mr-2">
          <Link href="/login" rel="Login" title="Login">
            <Button variant="outline">Login</Button>
          </Link>
        </section>

        {/* Mobile: hamburger button */}
        <div className="md:hidden flex items-end justify-end ml-78">
          <button
            className="inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
            aria-label="Toggle menu"
          >
            {isClick ? (
              // Close icon
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu icon
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu content */}
      {isClick && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-2 sm:px-3 text-orange-700">
          <Link href="/newest" rel="New" title="New" className="block">
            <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
              New
            </Button>
          </Link>
          <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
            Past
          </Button>
          <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
            Comments
          </Button>
          <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
            Ask
          </Button>
          <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
            Show
          </Button>
          <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
            Jobs
          </Button>
          <Button className="w-full justify-start transition-transform duration-150 hover:scale-105">
            Submit
          </Button>
          <Link href="/login" rel="Login" title="Login" className="block">
            <Button variant="outline" className="w-full justify-start">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

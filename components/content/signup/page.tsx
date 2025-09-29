"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";


export default function Page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="relative w-full max-w-[1200px] h-200 px-4 md:px-0">
        <div className="relative w-full h-[70vh] md:h-[720px] bg-cover rounded-[100px] overflow-hidden">
          <Image 
            src="/images/login.png" 
            fill
            alt="Hacker News" 
            className="object-cover"
            priority
          />
          <form 
            className="absolute inset-0 flex flex-col justify-center items-center 
            rounded-3xl space-y-2 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between w-full max-w-[80%] mt-60">
              <div className="flex flex-col w-full md:w-[45%] mx-2">
                <label htmlFor="username" className="text-white mb-2">USERNAME</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="w-full p-3 rounded-full text-center text-black bg-white outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full md:w-[45%] mx-2 mt-4 md:mt-0">
                <label htmlFor="password" className="text-white mb-2 text-right self-end">
                  PASSWORD
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full p-3 rounded-full text-center text-black bg-white outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full 
                text-lg font-bold hover:bg-orange-700 transition cursor-pointer"
              >
                Sign up
              </button>
            </div>
            <div>
                <Link href={"/login"}>
                    <Button className="cursor-pointer">
                        You already have an account? Login here!
                    </Button>
                </Link>
            </div>
          </form>    
        </div>
      </div>
    </div>
  );
}

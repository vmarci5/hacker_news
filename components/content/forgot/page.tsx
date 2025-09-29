"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

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
            <div className="w-full max-w-[80%] mt-60 mx-auto text-center">
              <div>
                <label
                  htmlFor="username"
                  className="text-white block text-center mb-2"
                >
                  USERNAME
                </label>

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
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full 
                text-lg font-bold hover:bg-orange-700 transition cursor-pointer"
              >
                Send reset email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

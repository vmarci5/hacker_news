import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-orange-500 text-white">
      <div className="w-full grid grid-cols-3 items-center space-x-4 text-orange-700">
        <section className="justify-start ml-2">
          <Link href="/" rel="Dashboard" title="Dashboard">
            <Image
              src="/images/logo.png"
              alt="Hacker News Logo"
              width={50}
              height={50}
            />
          </Link>
        </section>
        <section className="flex space-x-2 justify-center">
          <Button className="transition-transform duration-150 hover:scale-110">New</Button>
          <Button className="transition-transform duration-150 hover:scale-110">Past</Button>
          <Button className="transition-transform duration-150 hover:scale-110">Comments</Button>
          <Button className="transition-transform duration-150 hover:scale-110">Ask</Button>
          <Button className="transition-transform duration-150 hover:scale-110">Show</Button>
          <Button className="transition-transform duration-150 hover:scale-110">Jobs</Button>
          <Button className="transition-transform duration-150 hover:scale-110">Submit</Button>
        </section>
        <section className="justify-end ml-auto mr-2">
            <Link href="/login" rel="Login" title="Login">
                <Button variant="outline">Login</Button>
            </Link>
        </section>
      </div>
    </nav>
  );
}

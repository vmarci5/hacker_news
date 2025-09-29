import Card from "@/components/content/card/page";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { Suspense } from "react";
export default function NewestPage() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-8 mt-8 ">
        <Image
          src="/images/footer.png"
          alt="Hacker News"
          width={40}
          height={40}
          className="rounded"
          priority
        />
        <p className="font-bold text-orange-600 tracking-tight">
          Please read the 
          <Link href="https://news.ycombinator.com/showhn.html">
            <Button className="cursor-pointer">Show HN rules</Button> 
          </Link>
          and 
          <Link href="https://news.ycombinator.com/item?id=22336638">
            <Button className="cursor-pointer">tips</Button> 
          </Link>
          before posting. You can browse the newest Show HNs 
          <Link href="https://news.ycombinator.com/shownew" >
            <Button className="cursor-pointer">here</Button>. 
          </Link>
        </p>
      </div>
      <Suspense>
        <Card feed="show" />
      </Suspense>
    </>
  );
}

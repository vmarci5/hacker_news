import Card from '@/components/content/card/page';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
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
          These are jobs at YC startups. See more at {" "}
          <Link href="https://www.ycombinator.com/jobs" >
            <Button className="cursor-pointer">Jobs</Button>.
          </Link>
        </p>
      </div>
      <Suspense>
        <Card feed="jobs" />
      </Suspense>
    </>
  );
}

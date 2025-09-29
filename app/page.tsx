import Card from '@/components/content/card/page';
import { Suspense } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-4 mb-2 mt-8 ">
        <Image
          src="/images/footer.png"
          alt="Hacker News"
          width={40}
          height={40}
          className="rounded"
          priority
        />
        <p className="font-bold text-4xl text-orange-600 tracking-tight">
          Welcome to Hacker News!
        </p>
        <p className="font-bold text-2xl text-orange-600 tracking-tight">Dive in and start exploring the latest posts, ideas, and discussions from the tech world.</p>
      </div>
    <Suspense>
      <Card />
    </Suspense>
    </>
  );
}

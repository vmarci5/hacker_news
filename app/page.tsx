import Card from '@/components/content/card/page';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
    <Suspense>
      <Card />
    </Suspense>
    </>
  );
}

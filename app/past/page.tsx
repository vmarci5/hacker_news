import { Suspense } from 'react';
import Card from '@/components/content/card/page';
export default function NewestPage() {
  return (
    <Suspense>
      <Card feed="past" />
    </Suspense>
  );
}

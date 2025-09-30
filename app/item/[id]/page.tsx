import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

export const revalidate = 300;

type Post = {
  id: number;
  type?: string;
  by?: string;
  time?: number;
  title?: string;
  url?: string;
  text?: string;
  kids?: number[];
  parent?: number;
  descendants?: number;
  score?: number;
  comments?: Post[];
  deleted?: boolean;
  dead?: boolean;
};

function formatTimeAgo(unixSeconds?: number) {
  if (!unixSeconds) return "";
  const diffMs = Date.now() - unixSeconds * 1000;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

async function fetchItem(id: number | string): Promise<Post | null> {
  const r = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    { next: { revalidate } }
  );
  if (!r.ok) return null;
  return r.json();
}

function Comment({ c }: { c: Post }) {
  if (c.deleted || c.dead) return null;

  return (
    <li className="border-l pl-3 my-3">
      <div className="text-sm text-muted-foreground">
        <span className="font-medium text-orange-500">{c.by ?? "unknown"}</span> -{" "}
        {formatTimeAgo(c.time)}
      </div>

      {c.text && (
        <div
          className="prose prose-sm max-w-none my-2"
          dangerouslySetInnerHTML={{ __html: c.text }}
        />
      )}

      {!!c.comments?.length && (
        <ul className="mt-2 space-y-2">
          {c.comments.map((child) => (
            <Comment key={child.id} c={child} />
          ))}
        </ul>
      )}

      {!!c.kids?.length && (
        <ul className="mt-2 space-y-2">
          {c.kids.map((kidId) => (
            <CommentThread key={kidId} id={kidId} />
          ))}
        </ul>
      )}
    </li>
  );
}

async function CommentThread({ id }: { id: number }) {
  const c = await fetchItem(id);
  if (!c) return null;
  return <Comment c={c} />;
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const item = await fetchItem(id);
  if (!item) {
    return <div className="p-6">Post not found.</div>;
  }

  const preloadedComments = item.comments ?? [];

  return (
    <main className="mx-auto max-w-3xl p-4 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">
          {item.url && (
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              {item.title}
            </Link>
          )}
        </h1>
        <div className="text-sm text-muted-foreground">
          {item.score} points - by {item.by} - {formatTimeAgo(item.time)}
        </div>

        {/* <div className="flex items-center gap-3">
          <Link href={`/`} className="underline">
          <Button className="bg-orange-500">
              Back to main
          </Button>
          </Link>
        </div> */}
        <div className="gap-4 flex flex-col">
          <Textarea placeholder="Type your comment here." required />
          <Button className="bg-orange-500 cursor-pointer">Add comment</Button>
        </div>
      </header>

      <section>
        <h2 className="text-lg font-medium">
          Comments (
          {item.descendants ??
            preloadedComments.length ??
            item.kids?.length ??
            0}
          )
        </h2>

        {!!preloadedComments.length && (
          <ul className="mt-3">
            {preloadedComments.map((c) => (
              <Comment key={c.id} c={c} />
            ))}
          </ul>
        )}

        {!preloadedComments.length && !!item.kids?.length && (
          <ul className="mt-3">
            {item.kids.map((kidId) => (
              <CommentThread key={kidId} id={kidId} />
            ))}
          </ul>
        )}

        {!preloadedComments.length && !item.kids?.length && (
          <p className="text-sm text-muted-foreground">No comments yet.</p>
        )}
      </section>
    </main>
  );
}

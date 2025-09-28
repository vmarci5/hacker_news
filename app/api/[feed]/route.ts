import { NextResponse } from "next/server";

export const revalidate = 300;

const feed_endpoint: Record<string, string> = {
  top: "https://hacker-news.firebaseio.com/v0/topstories.json",
  new: "https://hacker-news.firebaseio.com/v0/newstories.json",
  best: "https://hacker-news.firebaseio.com/v0/beststories.json",
  ask: "https://hacker-news.firebaseio.com/v0/askstories.json",
  show: "https://hacker-news.firebaseio.com/v0/showstories.json",
  jobs: "https://hacker-news.firebaseio.com/v0/jobstories.json",
  updates: "https://hacker-news.firebaseio.com/v0/updates.json",
  past: "https://hacker-news.firebaseio.com/v0/topstories.json",
};

export async function GET(
  req: Request,
  ctx: { params: Promise<{ feed: string }> }
) {
  const { searchParams } = new URL(req.url);
  const { feed } = await ctx.params;

  const pageSize = Math.max(
    1,
    Math.min(100, Number(searchParams.get("pageSize")) || 21)
  );
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const feedUrl = feed_endpoint[feed];
  if (!feedUrl) {
    return NextResponse.json({ error: "Unknown feed" }, { status: 400 });
  }

  const idsRes = await fetch(feedUrl, { next: { revalidate } });
  if (!idsRes.ok) {
    return NextResponse.json({ error: "Failed to load ids" }, { status: 502 });
  }
  const ids: number[] = await idsRes.json();

  const totalItems = ids.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = (page - 1) * pageSize;
  const pageIds = ids.slice(start, start + pageSize);

  const items = await Promise.all(
    pageIds.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
        next: { revalidate },
      }).then((r) => r.json())
    )
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slim = items.map((it: any) => ({
    id: it?.id,
    title: it?.title,
    url: it?.url,
    by: it?.by,
    score: it?.score,
    time: it?.time,
    descendants: it?.descendants,
    type: it?.type,
  }));

  return NextResponse.json(
    { items: slim, page, pageSize, totalItems, totalPages },
    { status: 200 }
  );
}

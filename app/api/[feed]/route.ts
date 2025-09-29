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
  { params }: { params: Promise<{ feed: keyof typeof feed_endpoint }> }
) {
  const { searchParams } = new URL(req.url);
  const { feed } = await params;

  const pageSize = Math.max(
    1,
    Math.min(100, Number(searchParams.get("pageSize")) || 21)
  );
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const feedUrl = feed_endpoint[feed];
  if (!feedUrl)
    return NextResponse.json({ error: "Unknown feed" }, { status: 400 });

  const idsRes = await fetch(feedUrl, { next: { revalidate } });
  if (!idsRes.ok)
    return NextResponse.json({ error: "Failed to load ids" }, { status: 502 });

  let ids: number[];
  if (feed === "updates") {
    const u = await idsRes.json();
    ids = Array.isArray(u?.items) ? u.items : [];
  } else {
    ids = await idsRes.json();
  }

  let effectiveIds = ids;
  if (feed === "past") {
    const cutoff = Math.floor(Date.now() / 1000) - 24 * 60 * 60; // 24h
    const olderThanDay: number[] = [];

    for (const id of ids) {
      const it = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        {
          next: { revalidate },
        }
      ).then((r) => r.json());

      if (it?.time && it.time <= cutoff) {
        olderThanDay.push(id);
      }
    }
    effectiveIds = olderThanDay;
  }

  const totalItems = effectiveIds.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = (page - 1) * pageSize;
  const pageIds = effectiveIds.slice(start, start + pageSize);

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
    text: it?.text,
    parent: it?.parent,
    kids: it?.kids,
  }));

  return NextResponse.json(
    { items: slim, page, pageSize, totalItems, totalPages },
    { status: 200 }
  );
}

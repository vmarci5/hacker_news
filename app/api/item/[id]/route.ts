import { NextResponse } from "next/server";

export const revalidate = 300;

type HnItem = {
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
};

async function getItem(id: number): Promise<HnItem | null> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    { next: { revalidate } }
  );
  if (!res.ok) return null;
  return res.json();
}

async function getComments(
  ids: number[] = [],
  depth = 0,
  maxDepth = 10
): Promise<(HnItem & { children?: HnItem[] })[]> {
  if (!ids?.length || depth > maxDepth) return [];
  const items = await Promise.all(ids.map((id) => getItem(id)));
  const comments = (items.filter(Boolean) as HnItem[]).filter(
    (it) => it.type === "comment"
  );

  const withChildren = await Promise.all(
    comments.map(async (c) => ({
      id: c.id,
      type: c.type,
      by: c.by,
      time: c.time,
      text: c.text,
      parent: c.parent,
      kids: c.kids,
      children: await getComments(c.kids ?? [], depth + 1, maxDepth),
    }))
  );
  return withChildren;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const url = new URL(req.url);
    const maxDepth = Math.max(
      0,
      Math.min(10, Number(url.searchParams.get("maxDepth")) || 6)
    );

    const item = await getItem(Number(id));
    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    const comments = await getComments(item.kids ?? [], 0, maxDepth);

    const slim = {
      id: item.id,
      type: item.type,
      title: item.title,
      url: item.url,
      by: item.by,
      score: item.score,
      time: item.time,
      descendants: item.descendants,
      text: item.text,
      kids: item.kids,
      comments,
    };

    return NextResponse.json(slim, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to load item" },
      { status: 502 }
    );
  }
}

"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import SkeletonCard from "@/components/content/skeleton/page";
import Pagination from "@/components/content/pagination/page";

type Post = {
  id: number;
  title: string;
  url?: string;
  by: string;
  score: number;
  time: number;
  descendants?: number;
  type?: string;
};

type ApiResponse = {
  items: Post[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

type Props = {feed?: "top" | "new" | "ask" | "show" | "jobs" | "past"};

function formatTimeAgo(unixSeconds: number) {
  const diffMs = Date.now() - unixSeconds * 1000;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) {
    return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  }
  const hours = Math.floor(mins / 60);
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

export default function PostsGrid({feed = "top"}: Props) {
  const searchParams = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page") || "1");
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setData(null);
        setError(null);
        const endpoint = 
          feed === "new" ? "new" : 
          feed === "top" ? "top" : 
          feed === "ask" ? "ask" : 
          feed === "show" ? "show" :
          feed === "jobs" ? "jobs" :
          "past";
        const res = await fetch(`/api/${endpoint}?page=${pageFromUrl}&pageSize=21`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: ApiResponse = await res.json();
        if (alive) setData(json);
      } catch (e) {
        if (alive) setError("Failed to load posts.");
        console.error(e);
      }
    })();
    return () => {
      alive = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFromUrl]);

  if (error) {
    return <div className="p-4 text-sm text-red-600">{error}</div>;
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4">
          {Array.from({ length: 21 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }
  const { items, page, pageSize } = data;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Pagination totalPages={data.totalPages} />
      <div className="grid m-auto p-4 gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
        {items.map((p, index) => {
          const rank = index + 1 + (page - 1) * pageSize;
          const href = p.url ?? `/item/${p.id}`;
          return (
            <Card
              key={p.id}
              className="flex flex-coltransition-transform duration-150 hover:scale-105 hover:bg-orange-300 cursor-pointer border-4 border-orange-500 p-0"
              onClick={() =>
                router.push(`/item/${p.id}`)
              }
            >
              <CardHeader className="border-b-2 pb-2 border-orange-200 bg-orange-50 rounded-t-lg hover:bg-orange-400">
                <span className="text-muted-foreground w-6 text-xl pt-2">
                  {rank}
                </span>
                <CardTitle className="text-base text-center">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-xl"
                  >
                    {p.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-center">
                  <p className="text-sm text-muted-foreground break-words">
                    {p.url ? new URL(p.url).hostname : "news.ycombinator.com"}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {p.score} points by {p.by} {formatTimeAgo(p.time)}
              </CardContent>
              <CardFooter className="mt-auto flex items-center justify-between gap-2">
                <span className="text-md whitespace-nowrap pb-2">
                  {p.descendants == null || p.descendants === 0
                    ? "discuss"
                    : `${p.descendants} comment${
                        p.descendants === 1 ? "" : "s"
                      }`}
                </span>
                <Link
                  href="https://news.ycombinator.com/vote?id=45377641&how=up&goto=news"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo/circle-arrow-up.png"
                    alt="Vote up"
                    title="Vote up"
                    width={32}
                    height={32}
                    className="shrink-0 transition-transform duration-150 hover:scale-115 pb-2"
                  />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Pagination totalPages={data.totalPages} />
    </div>
  );
}

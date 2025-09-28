"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
};

export default function Page({ totalPages }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = Math.max(1, Number(searchParams.get("page") || "1"));

  const go = (page: number) => {
    const sp = new URLSearchParams(searchParams);
    if (page <= 1) {
      sp.delete("page");
    } else {
      sp.set("page", String(page));
    }
    router.push(`${pathname}?${sp.toString()}`);
  };

  const pagesToShow = [1, current - 1, current, current + 1, totalPages]
    .filter((p) => p >= 1 && p <= totalPages)
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .sort((a, b) => a - b);

  return (
    <Pagination className="pb-8 p-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={current === 1}
            onClick={(e) => {
              e.preventDefault();
              if (current > 1) go(current - 1);
            }}
          />
        </PaginationItem>

        {pagesToShow.map((p, i) => {
          const prev = pagesToShow[i - 1];
          const gap = prev != null && p - prev > 1;
          return (
            <span key={p} className="flex items-center">
              {gap && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={p === current}
                  onClick={(e) => {
                    e.preventDefault();
                    go(p);
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            </span>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={current === totalPages}
            onClick={(e) => {
              e.preventDefault();
              if (current < totalPages) go(current + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

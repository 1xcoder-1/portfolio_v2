import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatPostDate } from "@/lib/format-post-date";

export type BlogPostLinkProps = {
  title: string;
  slug: string;
  publishedAt: string;
  summary?: string;
  image?: string;
  className?: string;
};

export function BlogPostLink({
  title,
  slug,
  publishedAt,
  summary,
  image,
  className,
}: BlogPostLinkProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl p-3 sm:p-4 -mx-3 transition-colors duration-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800",
        className,
      )}
    >
      {image ? (
        <div className="relative aspect-16/9 w-full sm:w-44 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-foreground text-base md:text-[17px] font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </span>
          <span className="text-foreground/50 shrink-0 font-mono text-xs font-light">
            {formatPostDate(publishedAt)}
          </span>
        </div>
        {summary ? (
          <p className="text-foreground/65 text-xs md:text-sm line-clamp-2 leading-relaxed">
            {summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}


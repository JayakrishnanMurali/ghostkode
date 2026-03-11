"use client";

interface ProductHuntBadgeProps {
  url: string;
  variant?: "full" | "compact";
}

export function ProductHuntBadge({
  url,
  variant = "full",
}: ProductHuntBadgeProps) {
  const handleClick = (clickEvent: React.MouseEvent<HTMLAnchorElement>) => {
    clickEvent.stopPropagation();
  };

  if (variant === "compact") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-1 rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5 text-xs text-neutral-500 dark:text-neutral-400 transition-colors hover:border-[#ff6154]/50 hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 26.245 26.243"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.244 13.121a13.122 13.122 0 1 1-26.244 0 13.122 13.122 0 0 1 26.244 0"
            fill="#ff6154"
          />
          <path
            d="M14.82 13.452h-3.04V9.85h3.04a1.801 1.801 0 0 1 0 3.6m0-6.008H9.372v11.314h2.408v-3.9h3.04a4.207 4.207 0 1 0 0-8.414"
            fill="#fff"
          />
        </svg>
        PH
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className="hidden items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-2.5 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 transition-colors hover:border-[#ff6154]/50 hover:text-neutral-900 dark:hover:text-neutral-100 sm:flex"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 26.245 26.243"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.244 13.121a13.122 13.122 0 1 1-26.244 0 13.122 13.122 0 0 1 26.244 0"
          fill="#ff6154"
        />
        <path
          d="M14.82 13.452h-3.04V9.85h3.04a1.801 1.801 0 0 1 0 3.6m0-6.008H9.372v11.314h2.408v-3.9h3.04a4.207 4.207 0 1 0 0-8.414"
          fill="#fff"
        />
      </svg>
      Featured on Product Hunt
    </a>
  );
}

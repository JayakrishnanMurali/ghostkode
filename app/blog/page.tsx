import Link from "next/link";
import { getBlogPosts } from "app/db/blog";
import { formatDate } from "app/utils/helper";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">writing</h1>
      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
        {allBlogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col py-4 gap-1"
          >
            <div className="flex items-baseline justify-between gap-6">
              <span className="text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-200 leading-snug">
                {post.metadata.title}
              </span>
              <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500 tabular-nums">
                {formatDate(post.metadata.publishedAt).formattedDate}
              </span>
            </div>
            {post.metadata.summary && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                {post.metadata.summary}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

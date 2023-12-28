import Link from "next/link";
import { getBlogPosts } from "app/db/blog";
import { formatDate } from "app/utils/helper";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex border border-gray-100 hover:border-gray-300 dark:border-zinc-900 dark:hover:border-zinc-600  rounded-md p-4 flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex justify-between items-center text-neutral-900 dark:text-neutral-100 tracking-tight">
              <p className="">{post.metadata.title}</p>

              <p>{formatDate(post.metadata.publishedAt).formattedDate}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}

import Link from "next/link";
import { getBlogPosts } from "app/db/blog";

export default function Page() {
  const recentPosts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm jayakrishnan 👋
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Frontend engineer at{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://armada.ai/">
            Armada.ai
          </a>
          , building edge computing infrastructure products. I focus on
          scalable UIs, design systems, and developer tooling — primarily with
          React, TypeScript, and TanStack.
        </p>
        <p>
          Outside of work I build side <Link href="/project">projects</Link>,
          write about things I learn, and read a lot of fiction.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">recent writing</p>
        {recentPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-baseline justify-between py-3 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
          >
            <span className="text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-200">
              {post.metadata.title}
            </span>
            <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-600 ml-4 group-hover:text-neutral-500 transition-colors duration-200">
              ↗
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8 flex gap-4 text-sm text-neutral-400 dark:text-neutral-500">
        <a href="https://twitter.com/ghostkoder" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">twitter</a>
        <a href="https://www.linkedin.com/in/jayakrishnanmurali/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">linkedin</a>
        <a href="https://github.com/JayakrishnanMurali" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">github</a>
      </div>
    </section>
  );
}

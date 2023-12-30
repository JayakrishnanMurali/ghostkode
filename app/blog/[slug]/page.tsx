import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/db/blog";
import { formatDate } from "app/utils/helper";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://ghostkode.com/${image}`
    : `https://ghostkode.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://ghostkode.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://ghostkode.com/${post.metadata.image}`
              : `https://ghostkode.com/og?title=${post.metadata.title}`,
            url: `https://ghostkode.com/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Jayakrishnan M",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt).fullDate}
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>

      <footer className="mt-16">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/ghostkoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <svg
                width="16"
                height="16"
                role="img"
                aria-label="Vercel logo"
                className="inline-flex mr-1"
              >
                <use href="/sprite.svg#twitter" />
              </svg>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                @ghostkoder
              </span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

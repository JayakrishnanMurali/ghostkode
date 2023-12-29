import { ImageCard } from "app/components/img-card";
import Link from "next/link";

export default function Page() {
  const images: { alt: string; img: string }[] = [
    {
      alt: "Og image of codify webapp",
      img: "/images/project/codify/og-image.jpg",
    },
    {
      alt: "Dark mode screenshot of codify webapp",
      img: "/images/project/codify/dark.png",
    },
    {
      alt: "Light mode screenshot of codify webapp",
      img: "/images/project/codify/light.png",
    },
    {
      alt: "Dark mode with color gradient screenshot of codify webapp",
      img: "/images/project/codify/dark-gradient.png",
    },
  ];

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        checkout my project
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        Here are some of the projects I've worked on. You can find more on my{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/JayakrishnanMurali"
        >
          GitHub
        </a>
        .
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="flex items-center gap-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://codify.ghostkode.com/"
        >
          <h2 className="font-medium hover:underline text-xl mb-1 tracking-tighter">
            Codify
          </h2>
        </Link>

        <Link
          href="https://github.com/JayakrishnanMurali/codify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="16"
            height="16"
            role="img"
            aria-label="Vercel logo"
            className="inline-flex mr-1"
          >
            <use href="/sprite.svg#github" />
          </svg>
        </Link>
      </div>

      <ImageCard images={images} />
    </section>
  );
}

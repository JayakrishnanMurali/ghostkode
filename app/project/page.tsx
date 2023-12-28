import Image, { StaticImageData } from "next/image";
import dark from "../../public/images/project/codify/dark.png";
import light from "../../public/images/project/codify/light.png";
import darkGradient from "../../public/images/project/codify/dark-gradient.png";
import ogImage from "../../public/images/project/codify/og-image.jpg";
import { ImageCard } from "app/components/img-card";

export default function Page() {
  const imgs: { alt: string; img: StaticImageData }[] = [
    { alt: "Dark mode screenshot of codify webapp", img: dark },
    { alt: "Light mode screenshot of codify webapp", img: light },
    {
      alt: "Dark mode with color gradient screenshot of codify webapp",
      img: darkGradient,
    },
    { alt: "Og image of codify webapp", img: ogImage },
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

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Codify</h2>

      <ImageCard imgs={imgs} />
    </section>
  );
}

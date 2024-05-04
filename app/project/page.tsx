import { ImageCard } from "app/components/img-card";
import { ProjectCard } from "app/components/project-card";
import Link from "next/link";
import { projects } from "./_project.constants";

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

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            images={project.images}
            github={project.github}
            name={project.name}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

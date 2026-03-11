import type { Metadata } from "next";
import { projects } from "./_project.constants";

export const metadata: Metadata = {
  title: "Projects",
  description: "A few things I've built outside of work.",
};

export default function ProjectPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">things I've built</h1>
      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
        {projects.map((project) => (
          <div key={project.name} className="py-5 first:pt-0 last:pb-0">
            <div className="flex items-baseline justify-between mb-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-900 dark:text-neutral-100"
              >
                {project.name}
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                github ↗
              </a>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

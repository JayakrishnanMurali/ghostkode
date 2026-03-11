import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductHuntBadge } from "app/components/product-hunt-badge";
import { projects } from "../_project.constants";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <section>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="font-medium text-2xl tracking-tighter text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h1>
          {project.wip && (
            <span className="text-xs text-neutral-400 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded-full px-2 py-0.5">
              wip
            </span>
          )}
          {project.productHuntUrl && (
            <ProductHuntBadge url={project.productHuntUrl} />
          )}
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          {project.tagline}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
            stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
            highlights
          </p>
          <ul className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-sm text-neutral-600 dark:text-neutral-400 py-2.5 first:pt-0"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            github ↗
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              live ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

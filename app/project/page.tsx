import type { Metadata } from "next";
import Link from "next/link";
import { ProductHuntBadge } from "app/components/product-hunt-badge";
import { projects } from "./_project.constants";

export const metadata: Metadata = {
  title: "Projects",
  description: "A few things I've built outside of work.",
};

export default function ProjectPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        things I've built
      </h1>
      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="group py-5 first:pt-0 last:pb-0 flex items-baseline justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-200">
                  {project.name}
                </span>
                {project.wip && (
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    wip
                  </span>
                )}
                {project.productHuntUrl && (
                  <ProductHuntBadge url={project.productHuntUrl} />
                )}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {project.tagline}
              </p>
            </div>
            <span className="shrink-0 text-xs text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-500 transition-colors duration-200">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

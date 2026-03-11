import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

const roles = [
  {
    company: "Armada.ai",
    url: "https://armada.ai/",
    title: "Software Engineer",
    period: "Sep 2025 — Present",
    highlights: [
      "Led end-to-end frontend for the MSP module — account onboarding, RBAC, and entitlement management",
      "Rebuilt the Connectivity Usage Dashboard, replacing a legacy Power BI implementation",
      "Developed data usage forecasting with priority/standard splits and predictive projections",
      "Implemented global entitlement-driven feature visibility across the AEP console",
      "Introduced URL-driven routing and initiated a phased migration to TanStack Router",
    ],
  },
  {
    company: "CareStack",
    url: "https://carestack.com/",
    title: "Product Engineer",
    period: "Dec 2023 — Dec 2025",
    highlights: [
      "Built telecom products for dental practices using React, Electron, and React Native",
      "Contributed to the design system, ensuring accessibility and consistency across products",
    ],
  },
  {
    company: "NeoITO",
    url: "https://www.neoito.com/",
    title: "Software Development Engineer 2",
    period: "Aug 2022 — Nov 2023",
    highlights: [
      "Built the full UI for StoryD — recognized by Amazon, Microsoft, Apple, and Salesforce",
      "Led the frontend team, contributing to a 25% increase in revenue",
      "Developed real-time risk analysis features using UNL maps and integrated APIs",
    ],
  },
  {
    company: "Entri.app",
    url: "https://entri.app/",
    title: "Product Engineer",
    period: "Jan 2022 — Aug 2022",
    highlights: [
      "Implemented a live quiz feature that significantly increased user engagement",
      "Built an agent interaction tracking system to identify and automate common user flows",
    ],
  },
];

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">where I've worked</h1>
      <div className="flex flex-col gap-8">
        {roles.map((role) => (
          <div key={role.company} className="grid grid-cols-[1fr_2fr] gap-6">
            <div>
              <a
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
              >
                {role.company}
              </a>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {role.title}
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 tabular-nums">
                {role.period}
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {role.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

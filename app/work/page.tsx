import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Dedicated to crafting products that resonate with people and, in the
          process, educating the next wave of developers. Here's a snapshot of
          my current work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Carestack */}
        <h2 className="font-medium text-xl mb-1 tracking-tighter">CareStack</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product Engineer, 2023 Dec — Present
        </p>
        <p>
          I joined{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://carestack.com/"
          >
            CareStack
          </a>{" "}
          to build products that help dental practices run their business.
          Currently I work on the telecom team, building a suite of products
          that help practices manage their patients, appointments, and more. I
          work with a team of talented engineers to build scalable and reliable
          products that help dental practices grow. The technology stack I work
          with includes React, Electron, React Native, and more.
        </p>

        <p>
          I also contribute to the design system, ensuring that the products we
          build are accessible and consistent. I work closely with designers to
          implement designs that are user-friendly and accessible. I also
          contribute to the documentation and education of the team, ensuring
          that everyone is up to date with the latest technologies and best
          practices.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* NeoITO */}
        <h2 className="font-medium text-xl mb-1 tracking-tighter">NeoITO</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Development Engineer 2, 2022 Aug — 2023 Nov
        </p>
        <p>
          During my tenure at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.neoito.com/"
          >
            Neoito
          </a>
          , I had the privilege of contributing significantly to two impactful
          projects—StoryD and INSR. At StoryD, I took on the responsibility of
          developing and constructing the entire user interface for the
          application, ensuring seamless support across various screen sizes and
          multiple browsers. This effort garnered recognition from industry
          giants such as Amazon, Microsoft, Apple, and Salesforce, establishing
          the project's credibility. I also led the frontend team, driving a 25%
          increase in revenue and generating substantial profits for the
          company. The technology stack employed at StoryD included ReactJS,
          Redux, Webpack, Typescript, Tailwind, Yjs, Socket.io, and Cognito.
        </p>
        <p>
          Transitioning to the INSR project, I applied my skills to perform
          real-time risk analysis based on location, utilizing UNL maps and
          integrated APIs. I played a key role in designing and developing two
          critical features—a dynamic risk analysis report generation system and
          a dynamic risk engine dashboard. To ensure code quality and stability,
          I implemented automated testing and monitoring practices with tools
          such as Jest and Cypress. The technology stack used for INSR comprised
          ReactJS, Redux, Saga, UNL map, SCSS/SASS, Vite, Typescript, JWT, Jest,
          and Cypress. These experiences at Neoito allowed me to contribute to
          impactful projects, showcasing my proficiency in diverse technologies
          and frameworks.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Entri */}

        <h2 className="font-medium text-xl mb-1 tracking-tighter">Entri.app</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product Engineer, 2022 Jan — 2022 Aug
        </p>
        <p>
          I have actively contributed to various internal projects by
          spearheading the development of innovative frontend solutions that
          leverage cutting-edge technologies while adhering to industry best
          practices at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://entri.app/"
          >
            Entri
          </a>
          . One notable achievement includes the successful implementation of a
          live quiz feature, which not only significantly elevated user
          engagement but also prolonged user activity on the web application.
          This demonstrated my commitment to enhancing user experiences through
          the integration of dynamic features.
        </p>

        <p>
          In addition to my contributions, I played a pivotal role in optimizing
          agent interactions within the web application. By introducing a
          tracking feature, I facilitated the collection of comprehensive agent
          interaction data, enabling the identification and automation of common
          flows. The technology stack utilized for these projects encompasses
          NextJS, Zustand, Typescript, Material UI, Google Tag Manager, Python,
          and Django, showcasing my proficiency in a diverse set of tools and
          frameworks.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Infosys */}
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Infosys</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Engineer, 2020 Aug — 2022 Jan
        </p>
        <p>
          I revamped older React projects by transitioning from class-based
          approaches to the more modern and efficient function and hook-based
          methods. This switch not only enhanced the development experience but
          also contributed to better code maintainability. My collaboration
          extended to cross-functional teams, where I worked closely with
          external designers and stakeholders to seamlessly integrate and
          deliver projects on time.
        </p>

        <p>
          In addition to the structural improvements, I focused on optimizing
          web page rendering techniques to boost website performance at{" "}
          <a target="_blank" rel="noopener noreferrer" href="">
            Infosys
          </a>
          . These optimizations resulted in faster-loading pages, ultimately
          leading to increased user satisfaction. The technology stack employed
          for these enhancements encompassed ReactJS, NextJS, Tailwind,
          CSS/LESS, Webpack, Recharts, Redux, and Thunk.
        </p>
      </div>
    </section>
  );
}

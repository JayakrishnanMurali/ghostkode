import Image from "next/image";
import Link from "next/link";
import blurred from "../public/images/me/blurred.jpeg";
import green from "../public/images/me/green.jpeg";
import happy from "../public/images/me/happy.jpeg";
import idcard from "../public/images/me/idcard.jpeg";
import moody from "../public/images/me/moody.jpeg";
import ring from "../public/images/me/ring.jpeg";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex hover:bg-zinc-300 dark:hover:bg-zinc-500 transition-all ease-in-out duration-300 items-center px-2.5 py-0.5 rounded-full text-xs font-medium dark:text-white text-black bg-zinc-200 dark:bg-zinc-600">
      {text}
    </span>
  );
};

const BlogLink = ({ slug, name }) => {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey I'm jayakrishnan m 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a frontend developer, writer and creator. I currently{" "}
        <Link href="/work">work</Link> as a Product Engineer at{" "}
        <Link target="_blank" href="https://carestack.com/">
          <Badge text="CareStack" />
        </Link>{" "}
        . I'm passionate about building accessible, human-centered products and
        design systems.
      </p>

      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me wearing a paper ring"
            src={ring}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me with abhi in one of the best pictures of us in a moody lit light"
            src={moody}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing in front of some greenery"
            src={green}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={blurred}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me smiling in my bed with my laptop"
            src={happy}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge in my hand"
            src={idcard}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I work as a Product Engineer, where I primarily focus on frontend
          development. My work involves building and maintaining web
          applications using a variety of technologies such as React, Vite,
          Next.js, Electron, and Flutter.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past few months, I've been working on a few side{" "}
          <Link href="/project">projects</Link>. I have also been writing a lot
          about the things I learn and the things I build. I'm also an avid
          reader and I love to read books on fiction, fantasy, and crime.
        </p>
      </div>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <p>
          Here are a few of my recent blog posts that you might find
          interesting:
        </p>

        <BlogLink
          name="React Re-Renders: Why They Happen and How to Optimize Them"
          slug="react-rerender-why"
        />

        <BlogLink
          name="Passkeys - What and Why?"
          slug="passkeys-what-and-why"
        />

        <BlogLink
          name="Understanding useMemo and useCallback"
          slug="understanding-usememo-usecallback"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          If you'd like to get in touch, feel free to{" "}
          <Link href="mailto:jayakrishnan1012@gmail.com">contact me</Link>.
        </p>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/ghostkoder"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jayakrishnanmurali/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/JayakrishnanMurali"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">github</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

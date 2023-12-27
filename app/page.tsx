import Link from "next/link";

const Badge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex hover:bg-zinc-300 dark:hover:bg-zinc-500 transition-all ease-in-out duration-300 items-center px-2.5 py-0.5 rounded-full text-xs font-medium dark:text-white text-black bg-zinc-200 dark:bg-zinc-600">
      {text}
    </span>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey I'm jayakrishnan m
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a frontend developer, writer and creator. I currently{" "}
        <Link href="/work">work</Link> as a Product Engineer at{" "}
        <Link href="https://carestack.com/">
          <Badge text="CareStack" />
        </Link>{" "}
        . I'm passionate about building accessible, human-centered products and
        design systems.
      </p>
    </section>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/project": {
    name: "project",
  },
  "/blog": {
    name: "blog",
  },
  "/work": {
    name: "work",
  },
};

export function Navbar() {
  const pathName = usePathname().toLowerCase();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathName === path.toLowerCase();
              return (
                <Link
                  key={path}
                  href={path}
                  className={`"transition-all hover:text-neutral-200 flex align-middle relative py-1 px-2
                  ${isActive ? " underline" : ""}`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}

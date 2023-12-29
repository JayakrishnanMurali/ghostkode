import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center gap-2 sm:gap-4 items-center flex-col h-[calc(100vh-400px)]">
      <h2 className="text-2xl sm:text-4xl font-bold">404 - Not found</h2>
      <p className="text-center">Sorry we couldn't find this page.</p>
      <Link
        href="/"
        className="dark:bg-white bg-black rounded-md px-4 py-2 text-white hover:bg-neutral-800 dark:text-black font-semibold text-sm dark:hover:bg-gray-300 transition-all duration-300 ease-in-out"
      >
        Back to home
      </Link>
    </div>
  );
}

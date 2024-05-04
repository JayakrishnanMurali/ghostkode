import Link from "next/link";
import React from "react";
import { ImageCard } from "./img-card";

export const ProjectCard = ({
  images,
  link,
  name,
  github,
}: {
  link: string;
  name: string;
  github?: string;
  images: { alt: string; img: string }[];
}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Link target="_blank" rel="noopener noreferrer" href={link}>
          <h2 className="font-medium hover:underline text-xl mb-1 tracking-tighter">
            {name}
          </h2>
        </Link>

        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <svg
              width="16"
              height="16"
              role="img"
              aria-label="Vercel logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#github" />
            </svg>
          </Link>
        )}
      </div>

      <div className="hover:scale-105 transition-all duration-300 ease-in-out transform">
        <Link target="_blank" rel="noopener noreferrer" href={link}>
          <ImageCard images={images} />
        </Link>
      </div>
    </div>
  );
};

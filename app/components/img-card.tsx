import Image, { StaticImageData } from "next/image";
import React from "react";

export const ImageCard = ({
  imgs,
}: {
  imgs: { alt: string; img: StaticImageData }[];
}) => {
  return (
    <div className=" bg-white dark:bg-[#111010] rounded-2xl p-4 shadow-xl shadow-slate-200 dark:shadow-[#000000]  overflow-hidden grid  sm:grid-cols-2 gap-4 my-8">
      {imgs.map((img, index) => {
        return (
          <div key={index} className="relative h-40">
            <Image
              alt={img.alt}
              src={img.img}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

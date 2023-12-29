import Image from "next/image";

export const ImageCard = ({
  images,
}: {
  images: { alt: string; img: string }[];
}) => {
  return (
    <div className=" bg-white dark:bg-[#111010] rounded-2xl p-4 shadow-xl shadow-slate-200 dark:shadow-[#000000]  overflow-hidden grid  sm:grid-cols-2 gap-4 my-8">
      {images.map((img, index) => {
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

"use client";

import Image from "next/image";

const IMAGES = [
  { src: "https://picsum.photos/600/380?random=91", alt: "Construction project" },
  { src: "https://picsum.photos/600/380?random=92", alt: "Construction site" },
  { src: "https://picsum.photos/600/380?random=93", alt: "Building work" },
  { src: "https://picsum.photos/600/380?random=94", alt: "Construction team" },
  { src: "https://picsum.photos/600/380?random=95", alt: "Project site" },
  { src: "https://picsum.photos/600/380?random=96", alt: "Construction detail" },
];

// Duplicated for seamless loop — each item is 496px (480 + 16 padding-right)
const TRACK = [...IMAGES, ...IMAGES];

export function ImageCarousel() {
  return (
    <section className="bg-brand-white py-14 overflow-hidden">
      <div className="animate-marquee flex w-max">
        {TRACK.map((img, i) => (
          <div key={i} className="pr-4 shrink-0">
            <div className="relative w-[480px] h-[300px] rounded overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="480px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const IMAGES = [
  { src: "/projects/2413-47th-new-build/20.jpg", alt: "Construction project" },
  { src: "/projects/juan-kitchen-remodel/04.jpg", alt: "Construction site" },
  { src: "/projects/led-bath-and-tub/03.jpg", alt: "Building work" },
  { src: "/projects/juan-living-room-remodel/07.jpg", alt: "Construction team" },
  { src: "/projects/pond-rehab/05.jpg", alt: "Project site" },
  { src: "/projects/2413-47th-new-build/21.jpg", alt: "Construction detail" },
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

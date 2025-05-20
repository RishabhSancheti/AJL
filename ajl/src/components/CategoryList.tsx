"use client";

import { useRef, useState, useEffect } from "react";
import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Replace these with your actual image paths
const items = [
  { id: 1, images: ["/Hero1.jpeg", "/Hero2.jpeg"], label: "Summer Collection" },
  { id: 2, images: ["/Hero3.jpeg", "/Hero4.jpeg"], label: "Winter Collection" },
  { id: 3, images: ["/Hero5.jpeg", "/Hero1.jpeg"], label: "Spring Collection" },
  { id: 4, images: ["/Hero2.jpeg", "/Hero3.jpeg"], label: "Autumn Collection" },
  { id: 5, images: ["/Hero4.jpeg", "/Hero5.jpeg"], label: "Formal Wear" },
  { id: 6, images: ["/Hero1.jpeg", "/Hero2.jpeg"], label: "Casual Wear" },
];

const CategoryList = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.offsetWidth < container.scrollWidth - 1);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    return () => container.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const style = getComputedStyle(card);
    const gap = parseInt(style.marginRight) || 32;
    const cardWidth = card.offsetWidth + gap;

    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth gap-8 [&::-webkit-scrollbar]:hidden -mx-4 px-4"
      >
        {items.map(({ id, images, label }, i) => (
          <Link
            href="/test"
            key={id}
            ref={i === 0 ? cardRef : null}
            className="flex-shrink-0 w-full flex flex-col gap-4 sm:w-[90%] md:w-[45%] lg:w-[30%]"
          >
            <div className="relative w-full h-[600px]">
              <Image
                src={images[0]}
                alt={`${label} image 1`}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="absolute object-cover z-10 hover:opacity-0 transition-opacity ease-in duration-500"
              />
              <Image
                src={images[1]}
                alt={`${label} image 2`}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="absolute object-cover"
              />
            </div>
            <div>
              <span>{label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default CategoryList;
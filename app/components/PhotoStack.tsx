"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";

const INITIAL_CARDS = [
  { id: 1, src: "/foto1.jpg", rotate: -10 },
  { id: 2, src: "/foto2.jpg", rotate: -4 },
  { id: 3, src: "/foto3.jpg", rotate: 4 },
  { id: 4, src: "/foto4.jpg", rotate: 10 },
];

const SWIPE_THRESHOLD = 60;

export function PhotoStack() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const distance = Math.abs(info.offset.x) + Math.abs(info.offset.y);
    if (distance <= SWIPE_THRESHOLD) return;

    setCards((prev) => {
      const next = [...prev];
      const top = next.pop();
      if (top) next.unshift(top);
      return next;
    });
  };

  return (
    <div
      className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
      role="group"
      aria-label="Fotos de Raphael Lelis. Arraste a foto de cima para trocar."
    >
      {cards.map((card, index) => {
        const isTop = index === cards.length - 1;

        return (
          <motion.div
            key={card.id}
            className="absolute h-56 w-44 touch-none border border-zinc-200 bg-white p-2 pb-10 shadow-xl sm:h-64 sm:w-52 sm:pb-12 dark:border-zinc-700 dark:bg-zinc-900"
            style={{ zIndex: index, cursor: isTop ? "grab" : "default" }}
            initial={false}
            animate={{
              rotate: isTop ? 0 : card.rotate,
              scale: isTop ? 1.04 : 1,
              y: isTop ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            drag={isTop ? true : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            whileTap={isTop ? { cursor: "grabbing" } : undefined}
          >
            <div className="relative h-full w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={card.src}
                alt={isTop ? "Foto de Raphael Lelis" : ""}
                fill
                sizes="(max-width: 640px) 176px, 208px"
                priority={isTop}
                draggable={false}
                className="pointer-events-none object-cover"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

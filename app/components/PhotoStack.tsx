'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const INITIAL_CARDS = [
  { id: 1, src: "/foto1.jpg", rotate: -12 },
  { id: 2, src: "/foto2.jpg", rotate: -4 },
  { id: 3, src: "/foto3.jpg", rotate: 6 },
  { id: 4, src: "/foto4.jpg", rotate: 12 },
];

export function PhotoStack() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const handleDragEnd = (e: any, info: any) => {
    const offset = Math.abs(info.offset.x) + Math.abs(info.offset.y);
    
    if (offset > 60) {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.pop();
        if (topCard) newCards.unshift(topCard);
        return newCards;
      });
    }
  };

  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center mb-8 md:mb-0">
      {cards.map((card, index) => {
        const isTop = index === cards.length - 1;

        return (
          <motion.div
            key={card.id}
            className="absolute w-44 h-52 sm:w-56 sm:h-64 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-2 pb-10 sm:pb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            style={{
              zIndex: index,
              cursor: isTop ? "grab" : "auto",
            }}
            initial={{ rotate: card.rotate, scale: 1 }}
            animate={{
              rotate: isTop ? 0 : card.rotate,
              scale: isTop ? 1.05 : 1,
              y: isTop ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            
            drag={isTop ? true : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            <div className="relative w-full h-full border-2 border-zinc-900 dark:border-white overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={card.src}
                alt="Foto Raphael Lelis"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                priority={isTop}
                draggable={false}
                className="object-cover transition-all duration-300 pointer-events-none"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
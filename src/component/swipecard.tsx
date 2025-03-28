"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const cards = ["1", "2", "3", "4", "5"];

export default function SwipeCard() {
    const controls = useAnimation();
    const [index, setIndex] = useState(0);
    const [isSwiped, setIsSwiped] = useState(false);

    const handleDragEnd = (event: PointerEvent, info: { offset: { x: number } }) => {
        const swipeThreshold = 150;
        if (Math.abs(info.offset.x) > swipeThreshold) {
            controls.start({ x: info.offset.x > 0 ? 500 : -500, opacity: 0, rotate: info.offset.x > 0 ? 15 : -15 })
                .then(() => {
                    setIndex((prev) => prev + 1); // Move to next word
                    // setIsSwiped(true);
                    controls.set({ x: 0, opacity: 1, rotate: 0 }); // Reset animation
                });
        } else {
            // Snap back
            controls.start({ x: 0, rotate: 0 });
        }
    };

    return(
        <div id="card" className="w-4rem display flex items-center justify-center h-screen">
            {index < cards.length && !isSwiped && (<motion.div className="w-80 h-96 bg-white shadow-lg rounded-2xl flex items-center justify-center text-xl font-semibold cursor-grab text-black"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    initial={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                {cards[index]}
            </motion.div>)}
        </div>
    )
}
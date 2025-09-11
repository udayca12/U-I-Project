"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

const stories = [
  { id: 1, title: "Story 1", content: "Short highlight of story 1..." },
  { id: 2, title: "Story 2", content: "Short highlight of story 2..." },
  { id: 3, title: "Story 3", content: "Short highlight of story 3..." },
  { id: 4, title: "Story 4", content: "Short highlight of story 4..." },
  { id: 5, title: "Story 5", content: "Short highlight of story 5..." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  // Auto shift every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % stories.length);
  };

  return (
    <>
      {/* Carousel Container */}
      <section className="relative w-full flex flex-col justify-center items-center py-12">
        <div className="relative w-full max-w-7xl">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>

          {/* Story */}
          <AnimatePresence mode="wait">
            <motion.div
              key={stories[current].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => setExpandedStory(stories[current].id)}
            >
              <div className="h-[400px] flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-xl p-10 text-center w-full">
                <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {stories[current].title}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                  {stories[current].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>

        {/* Explore More Stories Button Below Carousel */}
        <div className="mt-8">
          <Link href="/impact">
            <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition shadow">
              Explore More Stories
            </button>
          </Link>
        </div>
      </section>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedStory && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 w-[80%] md:w-[60%] h-[70vh] flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* X Button */}
              <button
                onClick={() => setExpandedStory(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title */}
              <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                {stories.find((s) => s.id === expandedStory)?.title}
              </h2>

              {/* Content */}
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1 overflow-y-auto">
                Full details of the story will appear here with more readable
                space...
              </p>

              {/* Bottom Explore Button */}
              <div className="flex justify-end mt-6">
                <Link href="/impact">
                  <button className="px-5 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                    Explore More Stories
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

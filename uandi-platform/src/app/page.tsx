"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/StoriesCarousel";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Welcome to Echoes of U&amp;I
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          An Interactive U&amp;I community hub for Volunteers and Leaders to
          share their stories, engage with peers, and celebrate the love of
          teaching and growing.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/login">
            <button className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
              Join as Volunteer
            </button>
          </Link>
        </div>
      </header>

      {/* Carousel Section */}
      <Carousel />

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Echoes of U&amp;I. Built with Love by Swara
        Learning Center.
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
          <Link href="/impact">
            <button className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition">
              Explore Stories
            </button>
          </Link>
        </div>
      </header>

      {/* Quick Links Section */}
      <main className="flex-1 px-6 sm:px-12 py-10 grid gap-8 sm:grid-cols-3">
        <Link href="/polls">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center cursor-pointer">
            <Image src="/polls-icon.png" alt="Polls" width={60} height={60} />
            <h2 className="mt-4 text-xl font-semibold">
              Best Teacher of the Month
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Vote for and celebrate the teacher making the biggest impact.
            </p>
          </div>
        </Link>

        <Link href="/affy">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center cursor-pointer">
            <Image
              src="/affy-icon.png"
              alt="Affy Wall"
              width={60}
              height={60}
            />
            <h2 className="mt-4 text-xl font-semibold">Affy Wall</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Write affirmations and encourage your fellow volunteers.
            </p>
          </div>
        </Link>

        <Link href="/impact">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center cursor-pointer">
            <Image src="/story-icon.png" alt="Stories" width={60} height={60} />
            <h2 className="mt-4 text-xl font-semibold">Impact Stories</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Share your journey and read stories from the community.
            </p>
          </div>
        </Link>
      </main>

      {/* Highlight Section */}
      <section className="px-6 sm:px-12 py-12 bg-purple-50 dark:bg-gray-900 text-center">
        <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6">
          🌟 Best Story of the Week
        </h2>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <p className="italic text-gray-600 dark:text-gray-300">
            “Teaching these kids taught me more than I could ever teach them.
            Their smiles are the real reward.” – Volunteer A
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Echoes of U&amp;I. Built with Love by Swara
        Learning Center.
      </footer>
    </div>
  );
}

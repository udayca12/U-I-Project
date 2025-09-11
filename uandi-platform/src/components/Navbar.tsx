"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + Brand */}
      <div className="flex items-center gap-3">
        <Image
          src="/UandI_logo.png"
          alt="Echos of U&I"
          width={45}
          height={45}
          className="rounded-full transition-transform duration-200 hover:scale-110"
        />
        <span className="text-xl font-bold text-purple-700 dark:text-purple-300 tracking-wide">
          Echoes of U&I
        </span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
        <Link href="/" className="nav-link hover-pop">
          Home
        </Link>
        <Link href="/hall-of-fame" className="nav-link hover-pop">
          Hall Of Fame
        </Link>
        <Link href="/vote" className="nav-link hover-pop">
          Vote Now
        </Link>
        <Link href="/affi-wall" className="nav-link hover-pop">
          Affy Wall
        </Link>
        <Link href="/stories" className="nav-link hover-pop">
          Impact Stories
        </Link>
        <Link href="/about" className="nav-link hover-pop">
          About Us
        </Link>
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative group hover-pop">
          <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-red-600 transition" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3 cursor-pointer hover-pop">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
            <Image
              src="/default-avatar.png"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="hidden sm:block font-medium text-gray-700 dark:text-gray-200">
            My Space
          </span>
        </div>
      </div>
    </nav>
  );
}

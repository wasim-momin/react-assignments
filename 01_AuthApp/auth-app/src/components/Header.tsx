"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#272757] text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Nav Links */}
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/auth/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link href="/auth/signup" className="hover:text-gray-300">
            Signup
          </Link>
          <Link href="/auth/signup" className="hover:text-gray-300">
            Logout
          </Link>
        </div>
      </nav>
    </header>
  );
}

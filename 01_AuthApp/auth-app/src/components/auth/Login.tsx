"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0F0E47" }}
    >
      <div
        className="p-8 rounded-xl w-full max-w-md"
        style={{ backgroundColor: "#272757" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>

        {/* Username / Password Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#D9D9D9] text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#D9D9D9] text-black"
          />
          <button className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-500"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>

        {/* Social Login */}
            <div className="flex items-center justify-center gap-4 mt-6">
      <button className="flex cursor-pointer items-center justify-center w-12 h-12 rounded-lg bg-[#DB4437] text-white hover:bg-[#c33d31] shadow-md">
            <Mail size={22} />
          </button>
      <button className="flex cursor-pointer items-center justify-center w-12 h-12 rounded-lg bg-[#181717] text-white hover:bg-[#333333] shadow-md">
            <Github size={22} /> 
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-gray-300 text-sm mt-6 text-center">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-white underline hover:text-gray-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

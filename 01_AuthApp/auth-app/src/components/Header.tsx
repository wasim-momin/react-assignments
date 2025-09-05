"use client";

import { logout } from "@/store/slices/authSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {

  const [open, setOpen] = useState(false);
    const user = useSelector((state: RootState) => state.auth.userData);
    const dispatch = useDispatch()
    const router = useRouter()

  const handleLogout = ()=>{
    dispatch(logout())
    router.push("/login");
  }
  return (
    <header className="fixed top-0 w-full bg-[#272757] text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold"><Link href="/dashboard">MyApp</Link></div>

        {/* Nav Links */}
        <div className="flex gap-6 items-center">
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
           <div className="relative">
        {/* Profile Circle */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-[#505081] flex items-center justify-center text-white font-bold"
        >
          {user?.username[0].toUpperCase()}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="p-2 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
            <p className="px-4 py-2 text-gray-700">{user?.username}</p>
             <button onClick={handleLogout} className="cursor-pointer w-full p-1 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
            Log out
          </button>
          </div>
        )}
      </div>
        </div>
      </nav>
    </header>
  );
}

// app/dashboard/page.tsx
"use client";

import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const {user, accessToken} = useSelector((state: RootState) => state.auth);
  console.log("dashboard data", user);
  console.log("dashboard accessToken", accessToken);

  return (
    <div className="flex flex-col min-h-screen bg-[#0F0E47] text-white">
      {/* Main content full height minus header/footer */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-10">
          Welcome, User {user?.username} 👋
        </h1>
        {!user?.isEmailVerified &&(
          <div className="bg-yellow-300 text-black p-4 rounded-lg mb-6 flex flex-col items-center">
            <p className="mb-2 font-semibold">
              Your email is not verified yet.
            </p>
            <Link
              // href={`/auth/verify-email`}
              href={`/auth/verify-email?token=${accessToken}`}
              className="bg-yellow-200 text-blck px-4 py-2 rounded-lg"
            >
              Verify Now
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-[#272757] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p className="text-gray-300 text-sm">
              View and update your personal information.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#272757] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-300 text-sm">
              Manage your preferences and app settings.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#272757] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Reports</h2>
            <p className="text-gray-300 text-sm">
              Check your latest activity and reports here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

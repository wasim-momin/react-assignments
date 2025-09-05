// app/dashboard/page.tsx
"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Dashboard() {

  const user = useSelector((state:RootState)=>state.auth.userData)

console.log("current user data", user);


  return (
    <div className="flex flex-col min-h-screen bg-[#0F0E47] text-white">
      {/* Main content full height minus header/footer */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-10">Welcome, User {user?.username} 👋</h1>

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

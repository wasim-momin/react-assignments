'use client'
import React from "react";
import { Eye, Trash2 } from "lucide-react";

type User = {
  id: number | string;
  username: string;
  email: string;
  avatar?: string;
};

const STATIC_USERS: User[] = [
  {
    id: 13,
    username: "wasim momin",
    email: "wasim.momin@example.com",
    avatar:
      "https://via.placeholder.com/80x80.png?text=WM",
  },
  {
    id: 14,
    username: "jane doe",
    email: "jane.doe@example.com",
    avatar:
      "https://via.placeholder.com/80x80.png?text=JD",
  },
  {
    id: 15,
    username: "john smith",
    email: "john.smith@example.com",
    avatar:
      "https://via.placeholder.com/80x80.png?text=JS",
  },
];

export default function UserListView() {
  const handleView = (user: User) => {
    // placeholder: replace with router push or modal open
    alert(`View user ${user.id} — ${user.username}`);
  };

  const handleDelete = (user: User) => {
    // placeholder: replace with API call + optimistic UI / confirm
    if (confirm(`Delete ${user.username}?`)) {
      alert(`(static) deleted ${user.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0E47] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Users</h2>
        </div>

        <div className="rounded-2xl p-4" style={{ backgroundColor: "#272757" }}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#505081]">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#E6E6F2]">User</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#E6E6F2] hidden md:table-cell">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#E6E6F2]">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#505081]">
                <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://via.placeholder.com/80x80.png?text=WM"
                          // alt={u.username}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#505081]"
                        />
                        <div className="flex flex-col">
                          <div className="font-semibold text-white">abbbs</div>
                          <div className="text-sm text-[#E6E6F2]">ID: 1</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 hidden md:table-cell text-sm text-[#E6E6F2]">aaa</td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          
                          title="View"
                          className="w-10 h-10 rounded-md flex items-center justify-center bg-[#505081] hover:bg-[#8686AC] transition"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          
                          title="Delete"
                          className="w-10 h-10 rounded-md flex items-center justify-center bg-transparent border border-[#505081] hover:bg-[#505081] transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-[#E6E6F2]">Page 1</div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[#505081] hover:bg-[#8686AC]">Prev</button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[#505081] hover:bg-[#8686AC]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

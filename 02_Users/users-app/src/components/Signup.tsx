import Link from "next/link";
import { Input } from "./common";

export default function Signup() {
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
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
            Signup
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-500"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>
        <p className="text-gray-300 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-white underline hover:text-gray-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

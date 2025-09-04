import Link from "next/link";

export default function SignUp() {
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
          Sign Up
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#e8f0fe] text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#e8f0fe] text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#e8f0fe] text-black"
          />
          <button className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
            Sign Up
          </button>
        </form>
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

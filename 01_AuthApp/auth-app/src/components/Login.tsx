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
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#e8f0fe] text-black"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 rounded-lg border-none focus:outline-none bg-[#e8f0fe] text-black"
          />

          <button className="w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
            {" "}
            Login
          </button>
        </form>
        <p className="text-gray-300 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-white underline hover:text-gray-300"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

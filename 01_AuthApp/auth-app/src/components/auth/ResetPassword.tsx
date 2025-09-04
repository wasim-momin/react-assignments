export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0E47]">
      <div className="p-8 rounded-xl w-full max-w-md bg-[#272757]">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Reset Password</h2>
        <form className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 rounded-lg bg-[#D9D9D9] text-black border-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full p-3 rounded-lg bg-[#D9D9D9] text-black border-none focus:outline-none"
          />
          <button className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function EmailVerified() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0E47]">
      <div className="p-8 rounded-xl w-full max-w-md bg-[#272757] text-center">
        {!isVerified ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">
              Verify Your Email
            </h2>
            <p className="text-gray-300 mb-6">
              Please click the button below to verify your email.
            </p>
            <button
              onClick={() => setIsVerified(true)}
              className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]"
            >
              Click Here to Verify
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-300 mb-6">
              Your email has been successfully verified.
            </p>
            <Link
              href="/auth/login"
              className="inline-block w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]"
            >
              Login to Continue
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

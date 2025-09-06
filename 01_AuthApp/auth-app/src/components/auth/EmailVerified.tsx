"use client";
import { verifyUser } from "@/services/auth";
import Link from "next/link";
import { useState } from "react";

export default function VerifyEmail() {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null)

  const handleVerifyEmail = async () => {
    try {
      const verToken = "ffff8c2d25725516cf34c8cfa9c5f4d8f1f1f407"
      const resp= await verifyUser(verToken)
      if(resp.success){
        setIsVerified(true)
      }
      else{
        setIsVerified(false)
      }
    } catch (error: any) {
      setError(error.message)
      console.log("verify error",error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0E47]">
      
      <div className="p-8 rounded-xl w-full max-w-md bg-[#272757] text-center">
       {
        error && (
          <div className="bg-red-300 text-black p-4 rounded-lg mb-6 flex flex-col items-center">
            <p className="mb-2 font-semibold">
              {error}
            </p>
          </div>
        )
       }
        {!isVerified ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">
              Verify Your Email
            </h2>
            <p className="text-gray-300 mb-6">
              Please click the button below to verify your email.
            </p>
            <button
              onClick={handleVerifyEmail}
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
              href="/dashboard"
              className="inline-block w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]"
            >
              Continue browsing
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

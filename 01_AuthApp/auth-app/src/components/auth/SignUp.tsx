"use client";
import Link from "next/link";
import { InputField } from "../common";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useState } from "react";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invlaid Email").required("Email Id is required"),
  password: Yup.string()
    .min(6, "Al lteast 6 character")
    .required("Full name is required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignupSubmit = async (data: any) => {
    console.log("data", data);
    try {
      const res = await registerUser(data);
      console.log("res", res);
      setStatus({
        message: res.message,
        success: res.success,
      });
      if (res?.success) {
        dispatch(
          login({
            user: res.data.user,
            message: res.message,
            token: res.data.token || null,
          })
        );
      }
      if (typeof window !== "undefined") {

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: res.data.user,
          message: res.message,
          token: res.data.token || null,
        })
      );
    }
      router.push("/dashboard");
    } catch (error: any) {
      setStatus({
        message: error.message || "Server Error",
        success: false,
      });
      console.log(error);
    }
  };

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
        <Formik
          initialValues={initialValues}
          onSubmit={handleSignupSubmit}
          validationSchema={SignUpSchema}
        >
          <Form className="space-y-4">
            <InputField name="username" type="text" placeholder="Full Name" />
            <InputField name="email" type="email" placeholder="Email" />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
            />
            <button className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
              {/* {loading ? "Submitting..." : "Sign Up"} */}
              Sign Up
            </button>
            {status && (
              <p
                className={`text-center mt-2 ${
                  status.success ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </Form>
        </Formik>

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

// {
//     "statusCode": 200,
//     "data": {
//         "user": {
//             "_id": "68b9af75ab5f0f9f1ac7896a",
//             "avatar": {
//                 "url": "https://via.placeholder.com/200x200.png",
//                 "localPath": "",
//                 "_id": "68b9af75ab5f0f9f1ac78969"
//             },
//             "username": "post",
//             "email": "testpost@post.com",
//             "role": "ADMIN",
//             "loginType": "EMAIL_PASSWORD",
//             "isEmailVerified": false,
//             "createdAt": "2025-09-04T15:25:41.950Z",
//             "updatedAt": "2025-09-04T15:25:42.025Z",
//             "__v": 0
//         }
//     },
//     "message": "Users registered successfully and verification email has been sent on your email.",
//     "success": true
// }

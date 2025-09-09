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
const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignupSubmit = async (data: any) => {
    console.log("data", data);
    try {
      const res = await registerUser(data);
      console.log("res", res);
      if (res?.success) {
        dispatch(
          login({
            user: res.data.user,
            message: res.message,
            accessToken: res.data.accessToken || null,
            refreshToken: res.data.refreshToken || null,
          })
        );
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: res.data.user,
            message: res.message,
            accessToken: res.data.accessToken || null,
            refreshToken: res.data.refreshToken || null,
          })
        );
      }
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
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
         {error && (
          <div className="bg-red-300 text-black p-4 rounded-lg mb-6 flex flex-col items-center">
            <p className="font-semibold">{error}</p>
          </div>
        )}
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

"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { InputField } from "../common";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { loginUser } from "@/services/auth";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email id is requried"),
  password: Yup.string().required("password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (data: any) => {
    console.log("Login page data", data);
    try {
      const resp = await loginUser(data);
      console.log("login page api respo", resp);

      dispatch(
        login({
          user: resp.data.user,
          message: resp.message,
          accessToken: resp.data.accessToken,
          refreshToken: resp.data.refreshToken,
        })
      );

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: resp.data.user,
          message: resp.message,
          accessToken: resp.data.accessToken,
          refreshToken: resp.data.refreshToken,
        })
      );
      router.push("/dashboard");
    } catch (error: any) {
      console.log("login Error", error);
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
          Login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          <Form className="space-y-4">
            <InputField name="email" type="email" placeholder="Email" />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
            />
            <button className="cursor-pointer w-full p-3 rounded-lg text-white font-semibold bg-[#8686AC] hover:bg-[#505081]">
              Login
            </button>
          </Form>
        </Formik>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-500"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>

        {/* Social Login */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="flex cursor-pointer items-center justify-center w-12 h-12 rounded-lg bg-[#DB4437] text-white hover:bg-[#c33d31] shadow-md">
            <Mail size={22} />
          </button>
          <button className="flex cursor-pointer items-center justify-center w-12 h-12 rounded-lg bg-[#181717] text-white hover:bg-[#333333] shadow-md">
            <Github size={22} />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-gray-300 text-sm mt-6 text-center">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-white underline hover:text-gray-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

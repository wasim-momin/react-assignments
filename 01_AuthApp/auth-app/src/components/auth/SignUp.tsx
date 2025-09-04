"use client";
import Link from "next/link";
import { InputField } from "../common";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useState } from "react";
import { registerUser } from "@/services/auth";

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

  const handleSignupSubmit = async (data: any) => {
    console.log("data", data);
    try {
      const res = await registerUser(data);
      console.log("res", res);
    } catch (error: any) {
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

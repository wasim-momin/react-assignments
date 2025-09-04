'use client'

import { ErrorMessage, Field } from "formik";
import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "", className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
      <Field
        type={type}
        ref={ref}
        {...props}
        className={`w-full p-3 rounded-lg border-none focus:outline-none bg-[#e8f0fe] text-black"${className}`}
      />
      <ErrorMessage 
        name={props.name!}
        component="div"
          className="text-red-400 text-sm"
      />
      </div>
    );
  }
);

InputField.displayName = "Input"
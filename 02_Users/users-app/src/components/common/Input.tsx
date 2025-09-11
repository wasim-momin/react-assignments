import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "", className = "", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        className={`w-full p-3 rounded-lg border-none focus:outline-none bg-[#505081] text-white ${className}`}
      />
    );
  }
);

Input.displayName = "Input"
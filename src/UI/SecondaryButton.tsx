"use client";

import React, { ReactNode } from "react";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
}

const SecondaryButton = React.forwardRef<HTMLButtonElement,SecondaryButtonProps>(({ text, icon, ...rest }, ref) => {
  return (
      <button
        ref={ref}
        {...rest}
        className={`w-full  py-[0.4rem] bg-gray-300 text-black rounded-lg border text-lg cursor-pointer focus:scale-[0.98] duration-300 transition-all`}
        type="submit"
      >
        <span className="flex gap-2 items-center justify-center">
          {text}
          {icon}
        </span>
      </button>
  );
});

SecondaryButton.displayName = "SecondaryButton";
export default SecondaryButton;

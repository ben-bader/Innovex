import React from "react";


const Input = React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>((props,ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`py-1.5 px-3 bg-gray-500/30 border border-white/20 rounded-md w-full outline-none focus:border-white/40 focus:ring-2 ring-white/30 duration-300  `}
      required
    />
  );
});
Input.displayName = "Input";
 export default Input;
import React, { ReactNode } from "react";

import "./button.css";
import "@/styles/utils.css"

interface ButtonProps {
  children: ReactNode | string;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} Aurora_Style_Button Aurora_Style_Button_${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  variant: "primary",
};

export default Button;

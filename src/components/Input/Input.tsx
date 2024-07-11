import React from "react";
import "./input.css";
import "../../styles/utils.css";

interface InpurProps {
  type: "text" | "tel" | "email";
  label: string;
  className: string;
  error: string;
}

const Input = ({
  label,
  type = "text",
  className,
  error,
  ...props
}: InpurProps) => {
  return (
    <label className="Aurora_Input">
      {label}
      <input
        className={`${className} Aurora_Input_component ${error ? "Aurora_Input_component_error" : ""}`}
        type={type}
        {...props}
      />
      {error && <span role="alert" className="Aurora_Inpur_error">{error}</span>}
    </label>
  );
};

export default Input;

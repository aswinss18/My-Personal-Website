import React from "react";
import "../../src/index.css";

export default function NavLink({ children, theme }) {
  // Base style for the link

  const baseStyle = `font-semibold border-transparent border-b-2 px-2 transition-all duration-200 ease-in-out transform`;

  // Conditional theme-based styles with hover effect
  const themeStyle = theme
    ? "text-gray-950 hover:border-gray-950"
    : "text-white hover:border-white";

  return <div className={`${baseStyle}  ${themeStyle} `}>{children}</div>;
}

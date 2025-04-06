"use client";
import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("+++");
  };

  return (
    <button
      className="rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none py-2 px-4 text-base bg-main-color hover:bg-main-bg text-white hover:text-black focus-visible:ring-main-bg"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#171B2A] py-8">
      <div className="container flex justify-center">
        <p className="text-white">
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

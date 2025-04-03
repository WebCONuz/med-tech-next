"use client";
import Link from "next/link";
import React, { useState } from "react";

import { BsEnvelope } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const darkMode = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: "About us", href: "/" },
    { name: "All products", href: "/products" },
    { name: "Contact us", href: "/contact" },
  ];
  return (
    <header className="shadow">
      <div className="container flex items-center justify-between bg-main-color py-2">
        <div className="flex items-center gap-x-4">
          <Link href="#" className="flex items-center text-white">
            <BsEnvelope className="text-lg mr-2" />
            <span className="text-sm">med-exapmle@gmail.com</span>
          </Link>
          <Link href="#" className="flex items-center text-white">
            <LiaPhoneVolumeSolid className="text-lg mr-2" />
            <span className="text-sm">+998(90) 100-10-10</span>
          </Link>
          <Link href="#" className="flex items-center text-white">
            <GrLocation className="text-lg mr-2" />
            <span className="text-sm">15/A, Nest Tower, NYC</span>
          </Link>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            {/* darkmode btn */}
            <button
              className="cursor-pointer w-7 h-7 flex items-center justify-center outline-none border border-white dark:border-gray-600 rounded-md"
              onClick={darkMode}
            >
              {isDark ? (
                <IoMoon className="text-white" />
              ) : (
                <IoMdSunny className="text-lg text-white" />
              )}
            </button>

            {/* language */}
            <div className="group relative z-10 h-7 flex items-center gap-x-[2px] border border-white rounded-md px-2 cursor-pointer">
              <span className="text-sm text-white">English</span>
              <FaAngleDown className=" text-white" />
              <div className="absolute top-10 opacity-0 invisible right-0 w-[90px] bg-white border border-gray-100 rounded-md shadow-md overflow-hidden duration-200 group-hover:top-[29px] group-hover:opacity-100 group-hover:visible">
                <button className="outline-none border-none py-2 text-sm w-full bg-transparent hover:bg-gray-100">
                  English
                </button>
                <button className="outline-none border-none py-2 text-sm w-full bg-transparent hover:bg-gray-100">
                  Russian
                </button>
                <button className="outline-none border-none py-2 text-sm w-full bg-transparent hover:bg-gray-100">
                  Uzbek
                </button>
              </div>
            </div>
          </div>

          {/* socials */}
          <div className="flex gap-x-3">
            <Link href="#" className="text-white text-lg">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-white text-lg">
              <FaTelegram />
            </Link>
            <Link href="#" className="text-white text-lg">
              <FiInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between py-4 border-b border-gray-100">
        <Link href="#" className="flex items-center gap-x-3">
          <Image
            src="/cardiogram.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-8"
          />
          <h2 className="font-bold text-2xl">MedTech</h2>
        </Link>
        <div className="flex gap-x-8">
          {navLinks.map((item, index) => {
            const isActiveLink = pathname === item.href;
            return (
              <Link
                key={index + Math.random()}
                href={item.href}
                className={`font-semibold ${
                  isActiveLink ? "text-main-color" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="relative">
          <input
            id="search_input"
            type="text"
            placeholder="Search Products"
            className="outline-none border border-gray-300 py-2 pl-9 pr-4 rounded-4xl w-[300px] placeholder:text-gray-400 text-gray-600"
          />
          <label
            htmlFor="search_input"
            className="absolute left-5 top-1/2 -translate-1/2 cursor-pointer"
          >
            <FiSearch className="text-xl text-gray-400" />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

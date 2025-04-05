"use client";
import React, { useState } from "react";
import Accordion from "@/components/ui/accordion";
import TopProductCard from "@/components/ui/top-product-card";
import ProductCard from "@/components/ui/product-card";
import Button from "@/components/ui/button";
import RowProductCard from "@/components/ui/row-product-card";
import { allProducts } from "@/types/static.data";

import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { FaSliders } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const ProductsGrid = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      setOpenFilter(false);
    }
  };

  return (
    <div className="container flex pt-10 pb-20">
      <aside
        onClick={closeModal}
        className={`fixed lg:sticky left-0 lg:left-auto top-0 lg:top-1 z-50 lg:z-10 w-full lg:w-1/3 xl:w-1/4 h-screen bg-[#000000b6] lg:bg-transparent px-2 sm:px-4 lg:px-0 lg:pr-2 overflow-y-auto custom-scrollbar max-lg:flex max-lg:items-center max-lg:justify-center duration-200 ${
          openFilter
            ? "max-lg:opacity-100 max-lg:visible"
            : "max-lg:opacity-0 max-lg:invisible"
        }`}
      >
        <div className="bg-white rounded-md w-full sm:w-4/5 lg:w-full">
          <div className="lg:mb-5 px-4 py-6 lg:border lg:border-gray-300 rounded-md">
            <div className="flex items-center gap-x-4 mb-5 relative">
              <IoFilter className="text-2xl text-main-color" />
              <h5 className="font-semibold">Product Categories</h5>
              <MdClose
                onClick={() => setOpenFilter(false)}
                className="text-2xl absolute top-1/2 -translate-1/2 right-0 lg:hidden"
              />
            </div>
            <ul>
              <li
                onClick={() => setOpenFilter(false)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200"
              >
                <span>Hand Sanitizer</span>
                <FaLongArrowAltRight className="text-main-color text-lg" />
              </li>
              <li
                onClick={() => setOpenFilter(false)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200"
              >
                <span>Hand Sanitizer</span>
                <FaLongArrowAltRight className="text-main-color text-lg" />
              </li>
              <li
                onClick={() => setOpenFilter(false)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200"
              >
                <span>Hand Sanitizer</span>
                <FaLongArrowAltRight className="text-main-color text-lg" />
              </li>
              <li
                onClick={() => setOpenFilter(false)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200"
              >
                <span>Hand Sanitizer</span>
                <FaLongArrowAltRight className="text-main-color text-lg" />
              </li>
              <li
                onClick={() => setOpenFilter(false)}
                className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200"
              >
                <span>Hand Sanitizer</span>
                <FaLongArrowAltRight className="text-main-color text-lg" />
              </li>
            </ul>
          </div>

          {/* <div className="mb-5 px-4 py-6 border border-gray-300 rounded-md">
            <div className="flex items-center gap-x-4 mb-5">
              <IoFilter className="text-2xl text-main-color" />
              <h5 className="font-semibold">Filter by price</h5>
            </div>
          </div> */}

          <div className="mb-5 px-4 py-6 border border-gray-300 rounded-md hidden lg:block">
            <div className="flex items-center gap-x-4 mb-8">
              <LuChartColumnIncreasing className="text-2xl text-main-color" />
              <h5 className="font-semibold">Top Rated Product</h5>
            </div>
            <div className="flex flex-col gap-y-3">
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
            </div>
          </div>

          <img
            src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/banner/2.jpg"
            alt="rec"
            className="w-full rounded-md hidden lg:block"
          />
        </div>
      </aside>
      <main className="w-full lg:w-2/3 xl:w-3/4 min-h-[calc(100vh-118px-88px)] lg:pl-6">
        <nav className=" py-2 mb-8 xl:mb-10">
          <div className="flex items-center justify-between mb-4 sm:mb-0">
            <div className="flex gap-x-2">
              <IoGrid
                onClick={() => setIsGrid(true)}
                className={`text-[28px] cursor-pointer ${
                  isGrid ? "text-main-color" : "text-gray-600"
                }`}
              />
              <FaThList
                onClick={() => setIsGrid(false)}
                className={`text-[28px] cursor-pointer ${
                  !isGrid ? "text-main-color" : "text-gray-600"
                }`}
              />
            </div>
            <p className="hidden sm:block text-gray-600">
              Showing 1–12 of 18 results
            </p>
            <div className="flex gap-x-2 lg:gap-x-0">
              <Accordion />
              <div
                onClick={() => setOpenFilter(true)}
                className="lg:hidden flex items-center justify-center py-[6px] sm:py-2 px-2 sm:px-3 border border-gray-400 rounded-md"
              >
                <FaSliders className="text-lg sm:text-xl text-gray-500" />
              </div>
            </div>
          </div>
          <p className="sm:hidden text-gray-600">Showing 1–12 of 18 results</p>
        </nav>
        {isGrid ? (
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            {allProducts.map((item) => (
              <ProductCard key={item.id + 2 + Math.random()} data={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-y-4 sm:gap-y-6 xl:gap-y-8">
            {allProducts.map((item) => (
              <RowProductCard key={item.id + 2 + Math.random()} data={item} />
            ))}
          </div>
        )}
        <div className="flex justify-center items-center gap-x-2 mt-10">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <span className="text-2xl">...</span>
          <Button>12</Button>
        </div>
      </main>
    </div>
  );
};

export default ProductsGrid;

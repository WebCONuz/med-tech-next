"use client";
import { useState } from "react";
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

const ProductsGrid = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="container flex pt-10 pb-20">
      <aside className="w-1/4 h-screen pr-2 sticky top-1 overflow-y-auto custom-scrollbar">
        <div className="mb-5 px-4 py-6 border border-gray-300 rounded-md">
          <div className="flex items-center gap-x-4 mb-5">
            <IoFilter className="text-2xl text-main-color" />
            <h5 className="font-semibold">Product Categories</h5>
          </div>
          <ul>
            <li className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200">
              <span>Hand Sanitizer</span>
              <FaLongArrowAltRight className="text-main-color text-lg" />
            </li>
            <li className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200">
              <span>Hand Sanitizer</span>
              <FaLongArrowAltRight className="text-main-color text-lg" />
            </li>
            <li className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200">
              <span>Hand Sanitizer</span>
              <FaLongArrowAltRight className="text-main-color text-lg" />
            </li>
            <li className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200">
              <span>Hand Sanitizer</span>
              <FaLongArrowAltRight className="text-main-color text-lg" />
            </li>
            <li className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-main-bg duration-200">
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

        <div className="mb-5 px-4 py-6 border border-gray-300 rounded-md">
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
          className="w-full rounded-md"
        />
      </aside>
      <main className="w-3/4 min-h-[calc(100vh-118px-88px)] pl-6">
        <nav className="flex items-center justify-between py-2 mb-10">
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
          <p className="text-gray-600">Showing 1–12 of 18 results</p>
          <Accordion />
        </nav>
        {isGrid ? (
          <div className="grid grid-cols-3 gap-8">
            {allProducts.map((item) => (
              <ProductCard key={item.id + 2 + Math.random()} data={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-y-8">
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

import type { Metadata } from "next";
import ProductCard from "@/components/ui/product-card";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { allProducts } from "@/types/static.data";
import Button from "@/components/ui/button";
import Hero from "@/components/client/hero";
import { IoFilter } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default function Products() {
  return (
    <>
      <Hero
        title="All Products"
        description="Lorem ipsum dolor set amequet dara carqamaquer ture"
      />
      <div className="container flex pt-10 pb-20">
        <aside className="w-1/4 min-h-[calc(100vh-118px-88px)] pr-4">
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

          <div className="mb-5 px-4 py-6 border border-gray-300 rounded-md">
            <div className="flex items-center gap-x-4 mb-5">
              <IoFilter className="text-2xl text-main-color" />
              <h5 className="font-semibold">Filter by price</h5>
            </div>
          </div>

          <div className="mb-5 px-4 py-6 border border-gray-300 rounded-md">
            <div className="flex items-center gap-x-4 mb-5">
              <IoFilter className="text-2xl text-main-color" />
              <h5 className="font-semibold">Top Rated Product</h5>
            </div>
          </div>
        </aside>
        <main className="w-3/4 min-h-[calc(100vh-118px-88px)] pl-4">
          <nav className="flex items-center justify-between py-2 mb-10">
            <div className="flex gap-x-2">
              <IoGrid className="text-[28px] cursor-pointer text-main-color" />
              <FaThList className="text-[28px] cursor-pointer text-gray-500" />
            </div>
            <p className="text-gray-500 text-sm">Showing 1–12 of 18 results</p>
            <select className="">
              <option value="#">sort by price</option>
              <option value="#">sort by price</option>
              <option value="#">sort by price</option>
              <option value="#">sort by price</option>
            </select>
          </nav>
          <div className="grid grid-cols-3 gap-8">
            {allProducts.map((item) => (
              <ProductCard key={item.id + 2 + Math.random()} data={item} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button>Show all products</Button>
          </div>
        </main>
      </div>
    </>
  );
}

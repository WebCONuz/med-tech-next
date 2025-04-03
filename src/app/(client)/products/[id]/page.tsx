import type { Metadata } from "next";
import Link from "next/link";
import TopProductCard from "@/components/ui/top-product-card";
import Button from "@/components/ui/button";
import { ProductItem } from "@/types/product.types";

import { LuChartColumnIncreasing } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Product details",
  description: "Product details page",
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;
  return (
    <div className="container py-15 flex gap-x-10">
      <div className="w-3/4 flex">
        <div className="w-2/5 bg-main-bg rounded-md py-5 flex items-center justify-center">
          <img
            src="https://sotuvchi.com/files/products/tempscan/img/1215.png"
            alt="product-item-img"
            className="w-3/4"
          />
        </div>
        <div className="w-3/5 pl-10">
          <div className="flex flex-col h-full justify-center">
            <div className="flex gap-x-1 mt-4 mb-3">
              <FaStar className="text-lg text-yellow-500" />
              <FaStar className="text-lg text-yellow-500" />
              <FaStar className="text-lg text-yellow-500" />
              <FaStar className="text-lg text-yellow-500" />
              <BsStarHalf className="text-lg text-yellow-500" />
              <span className="ml-2 text-sm text-yellow-500">
                ( 95 Reviews )
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Hand Sanitizer</h1>
            <div className="flex items-center mb-4">
              <b className="mr-4">Category:</b>
              <span className="bg-main-bg text-gray-800 py-1 px-2 rounded-md text-sm mr-1">
                face-mask
              </span>
              <span className="bg-main-bg text-gray-800 py-1 px-2 rounded-md text-sm mr-1">
                ppe-kit
              </span>
              <span className="bg-main-bg text-gray-800 py-1 px-2 rounded-md text-sm mr-1">
                safety-suits
              </span>
            </div>
            <div className="flex items-center gap-x-4 mb-8">
              <span>Share:</span>
              <Link
                href="#"
                className="text-gray-600 hover:text-main-color duration-200"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-main-color duration-200"
              >
                <FaTelegram />
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-main-color duration-200"
              >
                <FiInstagram />
              </Link>
            </div>
            <p className="text-gray-500 leading-7 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates maxime nihil atque consequatur ex quas provident iste
              sapiente. Ipsam nisi, ex voluptatem aliquam veniam alias velit eos
              minima nulla laboriosam.
            </p>
            <Button>Contact us</Button>
          </div>
        </div>
      </div>
      <div className="w-1/4">
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
      </div>
    </div>
  );
}

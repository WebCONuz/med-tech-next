import type { Metadata } from "next";
import Link from "next/link";
import TopProductCard from "@/app/[locale]/components/ui/top-product-card";

import { LuChartColumnIncreasing } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Product details",
  description: "Product details page",
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const t = await getTranslations("SingleProduct");
  const { id } = await params;

  return (
    <main>
      <div className="container pb-8 pt-10 sm:py-12 md:py-15 flex flex-col lg:flex-row gap-x-4 xl:gap-x-10">
        <div className="w-full lg:w-[70%] xl:w-3/4 flex flex-col md:flex-row mb-8 lg:mb-0">
          <div className="w-full md:w-2/5 mb-5 sm:mb-6 md:mb-0 bg-main-bg rounded-md py-5 flex items-center justify-center">
            <img
              src="https://sotuvchi.com/files/products/tempscan/img/1215.png"
              alt="product-item-img"
              className="w-4/5 sm:w-1/2 md:w-[90%] xl:w-3/4"
            />
          </div>
          <div className="w-full md:w-3/5 md:pl-4 xl:pl-10">
            <div className="flex flex-col h-full justify-center">
              <div className="flex gap-x-1 mt-4 mb-2 sm:mb-3">
                <FaStar className="text-lg text-yellow-500" />
                <FaStar className="text-lg text-yellow-500" />
                <FaStar className="text-lg text-yellow-500" />
                <FaStar className="text-lg text-yellow-500" />
                <BsStarHalf className="text-lg text-yellow-500" />
                <span className="ml-2 text-sm text-yellow-500">
                  ( {t("review", { count: 7 })} )
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Hand Sanitizer
              </h1>
              <div className="flex items-start sm:items-center mb-4">
                <b className="text-sm sm:text-base mr-3 sm:mr-4">
                  {t("category")}
                </b>
                <div className="flex flex-wrap grow gap-1 mr-1">
                  <p className="bg-main-bg text-gray-800 py-[3px] sm:py-1 px-[6px] sm:px-2 rounded-md text-xs sm:text-sm">
                    face-mask
                  </p>
                  <p className="bg-main-bg text-gray-800 py-[3px] sm:py-1 px-[6px] sm:px-2 rounded-md text-xs sm:text-sm">
                    ppe-kit
                  </p>
                  <p className="bg-main-bg text-gray-800 py-[3px] sm:py-1 px-[6px] sm:px-2 rounded-md text-xs sm:text-sm">
                    safety-suits
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-4 sm:mb-8">
                <span>{t("share")}</span>
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
              <p className="text-gray-500 leading-7 mb-3 sm:mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates maxime nihil atque consequatur ex quas provident iste
                sapiente. Ipsam nisi, ex voluptatem aliquam veniam alias velit
                eos minima nulla laboriosam.
              </p>
              <Link
                href={`/orders/${id}`}
                className="rounded font-medium transition-colors py-2 px-4 text-center bg-main-color hover:bg-main-bg text-white hover:text-black"
              >
                {t("order")}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] xl:w-1/4">
          <div className="mb-5 px-3 xl:px-4 py-4 xl:py-6 border border-gray-300 rounded-md">
            <div className="flex items-center gap-x-3 xl:gap-x-4 mb-6 xl:mb-8">
              <LuChartColumnIncreasing className="text-2xl text-main-color" />
              <h5 className="font-semibold">{t("top")}</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col gap-y-3">
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
              <TopProductCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import { ProductItem } from "@/types/product.types";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import Button from "./button";

const RowProductCard = ({ data }: { data: ProductItem }) => {
  return (
    <div className="flex w-full border border-gray-300 shadow-md rounded-md overflow-hidden">
      <Link
        href={`/products/${data.id}`}
        className="flex items-center justify-center bg-main-bg w-2/5 py-5"
      >
        <img src={data.image} alt="product-item-img" className="w-3/4" />
      </Link>
      <div className="w-3/5 p-6">
        {data.title && (
          <Link href={`/products/${data.id}`}>
            <h4 className="text-xl font-bold">{data.title}</h4>
          </Link>
        )}
        <div className="flex gap-x-1 mt-4 mb-3">
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <BsStarHalf className="text-lg text-yellow-500" />
        </div>
        {data.description && (
          <p className="text-gray-500 leading-7 mb-4">{data.description}</p>
        )}
        <Link href={`/products/${data.id}`}>
          <Button>Show Product</Button>
        </Link>
      </div>
    </div>
  );
};

export default RowProductCard;

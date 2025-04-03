import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { ProductItem } from "@/types/product.types";

const ProductCard = ({ data }: { data: ProductItem }) => {
  return (
    <div className="relative shadow-xl rounded-lg overflow-hidden">
      <Link
        href={`/products/${data.id}`}
        className="flex items-center justify-center w-full h-[300px] bg-main-bg"
      >
        <img src={data.image} alt="product-item-img" className="w-3/4" />
      </Link>
      <div className="flex flex-col items-center pt-4 pb-5">
        <div className="flex gap-x-1 mb-3">
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <BsStarHalf className="text-lg text-yellow-500" />
        </div>
        {data.title && (
          <Link href={`/products/${data.id}`}>
            <h4 className="text-lg font-bold mb-1">{data.title}</h4>
          </Link>
        )}
        {data.description && (
          <p className="text-main-color w-[90%] overflow-hidden text-ellipsis whitespace-nowrap">
            {data.description} asdsdf fg fdg fdg h g
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

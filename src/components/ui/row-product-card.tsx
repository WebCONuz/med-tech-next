import Link from "next/link";
import { ProductItem } from "@/types/product.types";
// import { FaStar } from "react-icons/fa";
// import { BsStarHalf } from "react-icons/bs";

const RowProductCard = ({ data }: { data: ProductItem }) => {
  return (
    <div className="flex w-full border border-gray-300 shadow-md rounded-md overflow-hidden">
      <Link
        href={`/products/${data.id}`}
        className="flex items-center justify-center bg-main-bg w-2/5 py-5"
      >
        <img src={data.image} alt="product-item-img" className="w-1/2" />
      </Link>
      <div className="w-3/5 p-6">
        {data.title && (
          <Link href={`/products/${data.id}`}>
            <h4 className="text-xl font-bold">{data.title}</h4>
          </Link>
        )}
        {/* <div className="flex gap-x-1 mt-4 mb-3">
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <FaStar className="text-lg text-yellow-500" />
          <BsStarHalf className="text-lg text-yellow-500" />
        </div> */}
        {data.description && (
          <p className="text-gray-500 leading-7 mb-4">{data.description}</p>
        )}
        <div className="flex gap-x-2">
          <Link
            href={`/products/${data.id}`}
            className="rounded font-medium transition-colors py-2 px-4 text-center bg-main-color hover:bg-main-bg text-white hover:text-black"
          >
            Show product
          </Link>
          <Link
            href={`/orders/${data.id}`}
            className="rounded font-medium transition-colors py-2 px-4 text-center hover:bg-main-color bg-main-bg hover:text-white text-black"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RowProductCard;

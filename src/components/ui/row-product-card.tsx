import Link from "next/link";
import { ProductItem } from "@/types/product.types";

const RowProductCard = ({ data }: { data: ProductItem }) => {
  return (
    <div className="flex w-full border border-gray-300 shadow-md rounded-md overflow-hidden">
      <Link
        href={`/products/${data.id}`}
        className="flex items-center justify-center bg-main-bg w-2/5 py-5"
      >
        <img
          src={data.image}
          alt="product-item-img"
          className="w-4/5 sm:w-1/2"
        />
      </Link>
      <div className="w-3/5 p-3 sm:p-6">
        {data.title && (
          <Link href={`/products/${data.id}`}>
            <h4 className="text-lg sm:text-xl font-bold">{data.title}</h4>
          </Link>
        )}
        {data.description && (
          <p className="text-gray-500 sm:leading-7 mb-4">{data.description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-y-[6px] sm:gap-y-0 sm:gap-x-2">
          <Link
            href={`/products/${data.id}`}
            className="rounded font-medium transition-colors text-sm sm:text-base py-[6px] sm:py-2 sm:px-4 text-center bg-main-color hover:bg-main-bg text-white hover:text-black"
          >
            Show product
          </Link>
          <Link
            href={`/orders/${data.id}`}
            className="rounded font-medium transition-colors text-sm sm:text-base py-[6px] sm:py-2 sm:px-4 text-center hover:bg-main-color bg-main-bg hover:text-white text-black"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RowProductCard;

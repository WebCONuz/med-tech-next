import Link from "next/link";
interface SlideItem {
  image: string;
  title?: string;
  description?: string;
}
const SliderCard = ({ id, data }: { id: number; data: SlideItem }) => {
  return (
    <Link
      href={`/products/${id}`}
      className="group flex flex-col w-full p-2 relative shadow-md rounded-md"
    >
      <img
        src={data.image}
        alt="slide-item-img"
        className="w-full h-[300px] object-cover rounded-md mb-4"
      />
      {data.title && <h4 className="text-xl font-bold mb-2">{data.title}</h4>}
      {data.description && <p className="text-gray-500">{data.description}</p>}
      <div className="absolute top-0 left-0 z-10 bg-[#0858435d] w-full h-full rounded-md opacity-100 visible duration-200 group-hover:opacity-0 group-hover:invisible"></div>
    </Link>
  );
};

export default SliderCard;

import type { Metadata } from "next";

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
    <div className="container py-4 bg-main-color text-white">
      User: Product details Page, ID: {id}
    </div>
  );
}

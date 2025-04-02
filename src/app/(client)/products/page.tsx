import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default function Products() {
  return (
    <div className="container py-4 bg-main-color text-white">
      User: Products Page
    </div>
  );
}

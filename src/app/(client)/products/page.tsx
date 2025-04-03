import type { Metadata } from "next";
import Hero from "@/components/client/hero";
import ProductsGrid from "@/components/client/products-grid";

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
      <ProductsGrid />
    </>
  );
}

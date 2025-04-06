import type { Metadata } from "next";
import Hero from "@/app/[locale]/components/client/hero";
import ProductsGrid from "@/app/[locale]/components/client/products-grid";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default function Products() {
  const t = useTranslations("ProductsPage");

  return (
    <>
      <Hero title={t("title")} description={t("description")} />
      <ProductsGrid />
    </>
  );
}

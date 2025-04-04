import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/client/hero";
import Title from "@/components/ui/title";
import MainSlider from "@/components/client/main-slider";
import ProductCard from "@/components/ui/product-card";
import { allProducts, sertificateData } from "@/types/static.data";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function About() {
  return (
    <main>
      <Hero
        title="About us"
        description="A pharmacy with world-class service."
      />

      <section className="py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-x-10 xl:gap-x-14">
            <div className="hidden sm:block group w-full lg:w-1/2 mb-8 lg:mb-0 relative rounded-xl overflow-hidden">
              <img
                src="/about.webp"
                alt="about-image"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#0858435d] opacity-100 visible duration-200 group-hover:opacity-0 group-hover:invisible"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <Title title="Company Profile" />
              <p className="sm:leading-6 xl:leading-7 indent-6 sm:indent-8 xl:indent-10 mb-2 sm:mb-3 xl:mb-4">
                Мы успешно расширяли ассортимент нашей продукции, став надежным
                глобальным поставщиком в области здравоохранения, работающим с
                разными странами мира. Все, что мы поставляем, основано к
                лучшему качеству по доступным ценам.
              </p>
              <p className="sm:leading-6 xl:leading-7 indent-6 sm:indent-8 xl:indent-10 mb-2 sm:mb-3 xl:mb-4">
                Чтобы обеспечить высочайшее качество, все наши медицинские
                устройства подвергаются строжайшему контролю качества на каждом
                этапе производства, от сырья до конечного проверенного продукта.
                Все наши медицинские устройства сертифицированы в соответствии с
                международными признанными стандартами.
              </p>
              <p className="sm:leading-6 xl:leading-7 indent-6 sm:indent-8 xl:indent-10">
                Мы доставляем нашу продукцию максимально быстро и туда, где она
                нужна нашим клиентам – морским, воздушным, железнодорожным и
                автомобильным транспортом. Кроме того, мы предлагаем
                индивидуальные решения по доставке и можем доставить наши товары
                в течение нескольких дней во все пункты назначения по всему
                миру.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-12 lg:pb-14 xl:pb-16">
        <div className="container">
          <Title title="Featured Products" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
            {allProducts.map(
              (item) =>
                item.id < 6 && (
                  <ProductCard key={item.id + 2 + Math.random()} data={item} />
                )
            )}
          </div>
          <div className="w-full flex justify-center mt-8 md:mt-10">
            <Link
              href="/products"
              className="rounded font-medium transition-colors py-[6px] sm:py-2 px-3 sm:px-4 text-sm sm:text-base text-center bg-main-color hover:bg-main-bg text-white hover:text-black"
            >
              Show all products
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 xl:pb-24">
        <div className="container">
          <Title title="Sertifications" />
          <MainSlider items={sertificateData} />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/client/hero";
import Title from "@/components/ui/title";
import MainSlider from "@/components/client/main-slider";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

const productData = [
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
  },
];

const sertificateData = [
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "CE-02-1",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "CE-02-1",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "CE-02-1",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "CE-02-1",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "CE-02-1",
  },
  {
    image:
      "https://www.swissyhealthcare.com/wp-content/uploads/2019/05/Pharma-Service.jpg",
    title: "CE-02-1",
  },
];

export default function About() {
  return (
    <>
      <Hero
        title="About us"
        description="A pharmacy with world-class service."
      />
      <section className="py-16">
        <div className="container">
          <div className="flex gap-x-14">
            <div className="group w-1/2 relative rounded-xl overflow-hidden">
              <img
                src="/about.webp"
                alt="about-image"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#0858435d] opacity-100 visible duration-200 group-hover:opacity-0 group-hover:invisible"></div>
            </div>
            <div className="w-1/2">
              <Title title="Company Profile" />
              <p className="leading-7 indent-10 mb-4">
                Мы успешно расширяли ассортимент нашей продукции, став надежным
                глобальным поставщиком в области здравоохранения, работающим с
                разными странами мира. Все, что мы поставляем, основано к
                лучшему качеству по доступным ценам.
              </p>
              <p className="leading-7 indent-10 mb-4">
                Чтобы обеспечить высочайшее качество, все наши медицинские
                устройства подвергаются строжайшему контролю качества на каждом
                этапе производства, от сырья до конечного проверенного продукта.
                Все наши медицинские устройства сертифицированы в соответствии с
                международными признанными стандартами.
              </p>
              <p className="leading-7 indent-10">
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

      <section className="pb-16">
        <div className="container">
          <Title title="Featured Products" />
          <MainSlider items={productData} />
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <Title title="Sertifications" />
          <div className="grid grid-cols-4 gap-6">
            {sertificateData.map((item, index) => (
              <div
                key={index + 1 + Math.random()}
                className="text-center p-2 shadow-lg"
              >
                <img
                  src={item.image}
                  alt="serticete-image"
                  className="w-full h-[300px] object-cover rounded-md mb-3"
                />
                <h4 className="text-center text-gray-600">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Title from "@/components/ui/title";
import OrderForm from "@/components/client/order-form";

export const metadata: Metadata = {
  title: "Orders",
  description: "Orders page",
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function OrderItem({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <section className="pt-10 sm:pt-12 md:pt-14 lg:pt-15 pb-12 sm:pb-16 lg:pb-20">
        <div className="container">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 mx-auto">
            <Title title="Product Order" />
            <p className="leading-6 mb-6 sm:mb-8">
              <b>Dear Customer</b>: <br />
              If you need to know about our products and our services, please
              fill out the following form and send it to us, you can get our
              answer in the shortest possible time.
            </p>
            <OrderForm productName="TM08-207" />
          </div>
        </div>
      </section>
    </>
  );
}

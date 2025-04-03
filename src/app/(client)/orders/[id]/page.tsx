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
      <section className="pt-15 pb-20">
        <div className="container">
          <div className="w-2/5 mx-auto">
            <Title title="Product Order" />
            <p className="leading-6  mb-8">
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

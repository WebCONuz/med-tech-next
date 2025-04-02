import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
  description: "Orders page",
};

export default function About() {
  return (
    <div className="container py-4 bg-main-color text-white">
      User: Orders Page
    </div>
  );
}

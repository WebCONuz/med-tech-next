import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function Home() {
  return (
    <div className="container py-4 bg-main-color text-white">About Page</div>
  );
}
